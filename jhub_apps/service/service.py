import dataclasses
import os
from datetime import timedelta

from fastapi import APIRouter, Depends, Form, status, Request, Response
from starlette.responses import RedirectResponse

from jhub_apps.service.auth import create_access_token
from jhub_apps.service.client import get_client
from jhub_apps.service.models import AuthorizationError, HubApiError, User, ServerCreation
from jhub_apps.service.security import get_current_user

from fastapi import FastAPI
from fastapi.templating import Jinja2Templates

from jhub_apps.hub_client.hub_client import HubClient
from jhub_apps.service.utils import get_conda_envs, get_jupyterhub_config, get_spawner_profiles
from jhub_apps.spawner.types import FRAMEWORKS

app = FastAPI()

templates = Jinja2Templates(directory="jhub_apps/templates")
# Expires in 7 days
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24 * 7

# APIRouter prefix cannot end in /
service_prefix = os.getenv("JUPYTERHUB_SERVICE_PREFIX", "").rstrip("/")
router = APIRouter(prefix=service_prefix)

# TODO: Add response models for all endpoints


@router.get("/oauth_callback", include_in_schema=False)
async def get_token(code: str):
    "Callback function for OAuth2AuthorizationCodeBearer scheme"
    # The only thing we need in this form post is the code
    # Everything else we can hardcode / pull from env
    print("*"*100)
    print("Getting token")
    print("*"*100)
    # import ipdb as pdb; pdb.set_trace()
    async with get_client() as client:
        redirect_uri = (
            os.environ["PUBLIC_HOST"] + os.environ["JUPYTERHUB_OAUTH_CALLBACK_URL"],
        )
        data = {
            "client_id": os.environ["JUPYTERHUB_CLIENT_ID"],
            "client_secret": os.environ["JUPYTERHUB_API_TOKEN"],
            "grant_type": "authorization_code",
            "code": code,
            "redirect_uri": redirect_uri,
        }
        resp = await client.post("/oauth2/token", data=data)
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": resp.json()}, expires_delta=access_token_expires
    )
    ### resp.json() is {'access_token': <token>, 'token_type': 'Bearer'}
    response = Response("ok")
    response.set_cookie(key="access_token",value=f"Bearer {access_token}", httponly=True)
    return response



@router.get("/jhub-login", description="Login via OAuth2")
async def login(request: Request):
    authorization_url = os.environ["PUBLIC_HOST"] + "/hub/api/oauth2/authorize?response_type=code&client_id=service-japps"
    return RedirectResponse(authorization_url, status_code=302)

@router.get("/server/", description="Get all servers")
@router.get("/server/{server_name}", description="Get a server by server name")
async def get_server(user: User = Depends(get_current_user), server_name=None):
    """Get servers for the authenticated user"""
    hub_client = HubClient()
    user = hub_client.get_user(user.name)
    assert user
    user_servers = user["servers"]
    if server_name:
        # Get a particular server
        for s_name, server_details in user_servers.items():
            if s_name == server_name:
                return server_details
        return status.HTTP_404_NOT_FOUND
    else:
        # Get all servers
        return user_servers


@router.post("/server/")
async def create_server(
    # request: Request,
    server: ServerCreation,
    user: User = Depends(get_current_user),
):
    hub_client = HubClient()
    return hub_client.create_server(
        username=user.name,
        servername=server.servername,
        user_options=server.user_options,
    )


@router.put("/server/{server_name}")
async def update_server(
    server: ServerCreation, user: User = Depends(get_current_user), server_name=None
):
    hub_client = HubClient()
    return hub_client.create_server(
        username=user.name,
        servername=server_name,
        edit=True,
        user_options=server.user_options,
    )


@router.delete("/server/{server_name}")
async def delete_server(user: User = Depends(get_current_user), server_name=None):
    hub_client = HubClient()
    return hub_client.delete_server(
        user.name,
        server_name=server_name,
    )


@router.get(
    "/user",
    response_model=User,
    responses={401: {"model": AuthorizationError}, 400: {"model": HubApiError}},
)
async def me(user: User = Depends(get_current_user)):
    """Authenticated function that returns the User model"""
    return user


@router.get("/frameworks/", description="Get all frameworks")
async def get_frameworks(user: User = Depends(get_current_user)):
    frameworks = []
    for framework in FRAMEWORKS:
        frameworks.append(dataclasses.asdict(framework))
    return frameworks


@router.get("/conda-environments/", description="Get all conda environments")
async def conda_environments(user: User = Depends(get_current_user)):
    config = get_jupyterhub_config()
    conda_envs = get_conda_envs(config)
    return conda_envs


@router.get("/spawner-profiles/", description="Get all spawner profiles")
async def spawner_profiles(user: User = Depends(get_current_user)):
    config = get_jupyterhub_config()
    spawner_profiles_ = get_spawner_profiles(config)
    return spawner_profiles_


@router.get(
    "/status",
)
async def status_endpoint():
    """Check API Status"""
    # TODO: Add version
    return {"status": "ok"}
