from jupyterhub.spawner import SimpleLocalProcessSpawner

from jhub_apps import theme_template_paths, themes
from jhub_apps.configuration import install_jhub_apps
from jhub_apps.hub_client.utils import is_jupyterhub_5

c = get_config()  # noqa

from jupyterhub.auth import DummyAuthenticator  # noqa: E402

c.Authenticator.admin_users = {"admin"}
c.JupyterHub.authenticator_class = DummyAuthenticator
c.JupyterHub.log_level = 10

hub_url = "http://127.0.0.1:8000"
c.JupyterHub.bind_url = hub_url
c.JAppsConfig.jupyterhub_config_path = "jupyterhub_config.py"
c.JAppsConfig.conda_envs = []
c.JAppsConfig.service_workers = 1
c.JupyterHub.default_url = "/hub/home"

c = install_jhub_apps(
    c, spawner_to_subclass=SimpleLocalProcessSpawner, oauth_no_confirm=True
)

c.JupyterHub.template_paths = theme_template_paths


def service_for_jhub_apps(name, url):
    return {
        "name": name,
        "display": True,
        "info": {
            "name": name,
            "url": url,
            "external": True,
        },
    }


c.JupyterHub.services.extend(
    [
        service_for_jhub_apps(name="Argo", url="/argo"),
        service_for_jhub_apps(name="Users", url="/auth/admin/nebari/console/"),
        service_for_jhub_apps(name="Environments", url="/conda-store"),
        service_for_jhub_apps(name="Monitoring", url="/monitoring"),
    ]
)

# nebari will control these as ways to customize the template
c.JupyterHub.template_vars = {
    "hub_title": "Welcome to Nebari",
    "hub_subtitle": "your open source data science platform",
    "welcome": "Running in dev mode",
    "display_version": True,
    **themes.DEFAULT_THEME,
}

c.JupyterHub.load_groups = {
    "class-A": {"users": ["john", "alice"]},
    "class-B": {"users": ["john", "alice"]},
}

# Add permission to share servers/apps
# This should be handled by the users of jhub-apps,
# jhub-apps won't make this decision for the users, so that
# they can define permissions as per their preferences

for role in c.JupyterHub.load_roles:
    if role["name"] == "user":
        role["scopes"].extend(
            [
                # Scopes required for shared servers
                "access:servers",
                "servers",
                # Allow reading user and group names for sharing
                "read:users:name",
                "read:groups:name",
                # Allow sharing functionality (if on JupyterHub 5.x+)
                "shares!user",
            ]
            if is_jupyterhub_5() else []
        )
        break

# Add permission to start shared servers
c.JupyterHub.load_roles = c.JupyterHub.load_roles + [
    {
        "name": "allow-access-to-start-shared-server",
        "description": "Allows users to start shared servers",
        "scopes": [
            # This scope allows access to servers owned by other users (shared servers)
            "access:servers!server={server_owner}/{server_name}",
            # This scope enables starting those servers
            "servers!server={server_owner}/{server_name}",
        ],
        # Specify users or groups allowed to start shared servers
        "users": ["user-with-permission-to-start-shared"],
    }
]

# Uncomment to add a profile to the spawner
# c.KubeSpawner.profile_list = [
#     {
#         "description": "Stable environment with 0.5-1 cpu / 0.5-1 GB ram",
#         "display_name": "Small Instance",
#         "slug": "small-instance",
#     },
# ]
