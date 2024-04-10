import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import PushPinRoundedIcon from '@mui/icons-material/PushPinRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { StatusChip } from '@src/components';
import { JhApp } from '@src/types/jupyterhub';
import { API_BASE_URL } from '@src/utils/constants';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import {
  currentApp,
  currentNotification,
  isDeleteOpen,
  isStartOpen,
  isStopOpen,
} from '../../store';
import ContextMenu, { ContextMenuItem } from '../context-menu/context-menu';
import './app-card.css';
interface AppCardProps {
  id: string;
  title: string;
  description?: string;
  framework: string;
  thumbnail?: string;
  url: string;
  username?: string;
  ready?: boolean;
  isPublic?: boolean;
  isShared?: boolean;
  serverStatus: string;
  sx?: object;
  isAppCard?: boolean; // Use this to determine if it's an app or service
  app?: JhApp;
}

export const AppCard = ({
  id,
  title,
  description,
  framework,
  thumbnail,
  url,
  username,
  isPublic = false,
  isShared,
  serverStatus,
  isAppCard = true,
  app,
}: AppCardProps): React.ReactElement => {
  const [appStatus, setAppStatus] = useState('');
  const [, setNotification] = useRecoilState<string | undefined>(
    currentNotification,
  );
  const [, setIsStartOpen] = useRecoilState<boolean>(isStartOpen);
  const [, setIsStopOpen] = useRecoilState<boolean>(isStopOpen);
  const [, setIsDeleteOpen] = useRecoilState<boolean>(isDeleteOpen);
  const [, setCurrentApp] = useRecoilState<JhApp | undefined>(currentApp);

  useEffect(() => {
    if (!serverStatus) {
      setNotification('Server status id undefined.');
    } else {
      setAppStatus(serverStatus);
    }
  }, [serverStatus, setNotification]);

  const getIcon = () => {
    if (!isAppCard)
      return (
        <PushPinRoundedIcon
          sx={{ fontSize: '18px', position: 'relative', bottom: '2px' }}
          data-testid="PushPinRoundedIcon"
        />
      );
    if (isPublic)
      return (
        <PublicRoundedIcon
          sx={{ fontSize: '18px' }}
          data-testid="PublicRoundedIcon"
        />
      );
    if (isShared)
      return (
        <GroupRoundedIcon
          sx={{ fontSize: '18px' }}
          data-testid="GroupRoundedIcon"
        />
      );
    return (
      <LockRoundedIcon
        sx={{ fontSize: '18px' }}
        data-testid="LockRoundedIcon"
      />
    );
  };

  const menuItems: ContextMenuItem[] = [
    {
      id: 'start',
      title: 'Start',
      onClick: () => {
        setIsStartOpen(true);
        setCurrentApp(app);
      },
      visible: true,
      disabled: serverStatus !== 'Ready',
    },
    {
      id: 'stop',
      title: 'Stop',
      onClick: () => {
        setIsStopOpen(true);
        setCurrentApp(app);
      },
      visible: true,
      disabled: serverStatus !== 'Running' || isShared,
    },
    {
      id: 'edit',
      title: 'Edit',
      onClick: () =>
        (window.location.href = `${API_BASE_URL}/edit-app?id=${id}`),
      visible: true,
      disabled: isShared || id === '' || !isAppCard,
    },
    {
      id: 'delete',
      title: 'Delete',
      onClick: () => {
        setIsDeleteOpen(true);
        setCurrentApp(app);
      },
      visible: true,
      disabled: isShared || id === '' || !isAppCard,
    },
  ];

  return (
    <div className="card" id={`card-${id}`} tabIndex={0}>
      <a href={url}>
        <Card id={`card-${id}`} tabIndex={0} className="Mui-card">
          <div
            className={`card-content-header ${isAppCard ? '' : 'card-content-header-service'}`}
          >
            {framework ? (
              <>
                <div className="chip-container">
                  <div className="menu-chip">
                    <StatusChip status={appStatus} />
                  </div>
                </div>
                <ContextMenu id={`card-menu-${id}`} items={menuItems} />
              </>
            ) : (
              <></>
            )}
            <CardMedia>
              {thumbnail ? (
                <div
                  className={isAppCard ? 'img-overlay' : 'img-overlay-service'}
                >
                  <img src={thumbnail} alt="App thumb" />
                </div>
              ) : (
                <></>
              )}
            </CardMedia>
          </div>
          <div className="card-content-content">
            {framework && isAppCard ? (
              <div className="chip-container">
                <div className="menu-chip">
                  <Chip
                    color="default"
                    variant="outlined"
                    label={framework}
                    id={`chip-${id}`}
                    size="small"
                    sx={{ mb: '8px' }}
                  />
                </div>
              </div>
            ) : (
              <></>
            )}
            {isAppCard ? (
              <div
                className={`card-content-container ${!description ? 'no-hover' : ''}`}
              >
                <CardContent className="card-inner-content">
                  <span className="inline relative iconic">{getIcon()}</span>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-title"
                    sx={{ position: 'relative', top: '5px' }}
                  >
                    <span
                      className="card-content-truncate"
                      style={{
                        maxWidth: '165px',
                      }}
                    >
                      {title}
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className={`card-author ${!description ? 'no-hover' : ''}`}
                    sx={{ mt: '5px' }}
                  >
                    <span
                      className="card-content-truncate"
                      style={{
                        maxWidth: '200px',
                      }}
                    >
                      Created by {username}
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-description"
                  >
                    {description}
                  </Typography>
                </CardContent>
              </div>
            ) : (
              <div className="card-content-container app-service no-hover">
                <CardContent className="card-inner-content">
                  <span className="inline relative iconic">{getIcon()}</span>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="card-title"
                    sx={{ position: 'relative', bottom: '3px' }}
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="card-description-service"
                    sx={{ mt: '5px' }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </div>
            )}
          </div>
        </Card>
      </a>
    </div>
  );
};

export default AppCard;
