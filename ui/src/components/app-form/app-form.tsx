import InfoRoundedIcon from '@mui/icons-material/InfoRounded';

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  AppFrameworkProps,
  AppProfileProps,
  AppQueryGetProps,
  AppQueryUpdateProps,
} from '@src/types/api';
import { AppFormInput } from '@src/types/form';
import { UserState } from '@src/types/user';
import axios from '@src/utils/axios';
import { APP_BASE_URL, REQUIRED_FORM_FIELDS_RULES } from '@src/utils/constants';
import { getFriendlyDisplayName, navigateToUrl } from '@src/utils/jupyterhub';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { Thumbnail } from '..';
import {
  currentNotification,
  currentFile as defaultFile,
  currentFormInput as defaultFormInput,
  currentImage as defaultImage,
  currentServerName as defaultServerName,
  currentUser as defaultUser,
} from '../../store';
import './app-form.css';

export interface AppFormProps {
  id?: string;
}

export const AppForm = ({ id }: AppFormProps): React.ReactElement => {
  const navigate = useNavigate();
  const [submitting, setSubmitting] = useState(false);
  const [currentUser] = useRecoilState<UserState | undefined>(defaultUser);
  const [description, setDescription] = useState<string>('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const adjustTextareaHeight = (
    textarea: EventTarget & HTMLTextAreaElement,
  ) => {
    if (!textarea) return;
    textarea.style.height = 'auto'; // Reset height to recalculate
    textarea.style.height = textarea.scrollHeight + 'px'; // Set to scroll height
  };

  const [, setNotification] = useRecoilState<string | undefined>(
    currentNotification,
  );
  const [currentFormInput, setCurrentFormInput] = useRecoilState<
    AppFormInput | undefined
  >(defaultFormInput);
  const [currentServerName, setCurrentServerName] = useRecoilState<
    string | undefined
  >(defaultServerName);
  const [currentFile, setCurrentFile] = useRecoilState<File | undefined>(
    defaultFile,
  );
  const [currentImage, setCurrentImage] = useRecoilState<string | undefined>(
    defaultImage,
  );
  const [isPublic, setIsPublic] = useState(false);
  const [keepAlive, setKeepAlive] = useState(false);
  // Get the app data if we're editing an existing app
  const { data: formData, error: formError } = useQuery<
    AppQueryGetProps,
    { message: string }
  >({
    queryKey: ['app-form', id],
    queryFn: () =>
      axios.get(`/server/${id}`).then((response) => {
        return response.data;
      }),
    enabled: !!id,
  });

  const { data: frameworks, isLoading: frameworksLoading } = useQuery<
    AppFrameworkProps[],
    { message: string }
  >({
    queryKey: ['app-frameworks'],
    queryFn: () =>
      axios.get('/frameworks/').then((response) => {
        return response.data;
      }),
  });

  const { data: environments, isLoading: environmentsLoading } = useQuery<
    string[],
    { message: string }
  >({
    queryKey: ['app-environments'],
    queryFn: () =>
      axios.get('/conda-environments/').then((response) => {
        return response.data;
      }),
  });

  const { data: profiles, isLoading: profilesLoading } = useQuery<
    AppProfileProps[],
    { message: string }
  >({
    queryKey: ['app-profiles'],
    queryFn: () =>
      axios.get('/spawner-profiles/').then((response) => {
        return response.data;
      }),
  });

  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<AppFormInput>({
    defaultValues: {
      display_name: '',
      description: '',
      framework: '',
      thumbnail: '',
      filepath: '',
      conda_env: '',
      env: '',
      custom_command: '',
      profile: '',
      is_public: false,
      keep_alive: false,
    },
  });
  const currentFramework = watch('framework');

  useEffect(() => {
    const currentTextAreaRef = textAreaRef.current;
    const syncScroll = () => {
      if (overlayRef.current && textAreaRef.current) {
        overlayRef.current.scrollTop = textAreaRef.current.scrollTop;
      }
    };

    currentTextAreaRef?.addEventListener('scroll', syncScroll);
    return () => currentTextAreaRef?.removeEventListener('scroll', syncScroll);
  }, []);

  const getStyledText = () => {
    const normalText = description.slice(0, 200);
    const excessText = description.slice(200);
    return (
      <>
        {normalText}
        <span style={{ color: 'red' }}>{excessText}</span>
      </>
    );
  };
  const descriptionRef = useRef(null); // Create a ref for the textarea

  useEffect(() => {
    const input = descriptionRef.current as HTMLInputElement | null;
    if (input) {
      const value = input.value;
      const exceedLength = 200;

      if (value.length > exceedLength) {
        console.log('value', value.length, '/', exceedLength);
        const partOne = value.substring(0, exceedLength);
        const partTwo = value.substring(exceedLength);
        input.innerHTML = `<span>${partOne}</span><span style="color: red;">${partTwo}</span>`;
      } else {
        input.innerHTML = `<span>${value}</span>`;
      }
    }
  }, [description]);

  function setFocus(focus: boolean): void {
    setIsFocused(focus);
  }

  const onFormSubmit: SubmitHandler<AppFormInput> = ({
    display_name,
    description,
    framework,
    thumbnail,
    filepath,
    conda_env,
    env,
    custom_command,
    profile,
  }) => {
    const displayName = getFriendlyDisplayName(display_name);
    if (profiles && profiles.length > 0) {
      const payload: AppFormInput = {
        jhub_app: true,
        display_name: displayName,
        description,
        framework,
        thumbnail,
        filepath,
        conda_env,
        env: env ? JSON.parse(env) : null,
        custom_command,
        profile,
        is_public: isPublic,
        keep_alive: keepAlive,
      };
      setCurrentFormInput(payload);
      navigate(`/server-types${id ? `?id=${id}` : ''}`);
    } else {
      const payload = {
        servername: currentServerName || displayName,
        user_options: {
          jhub_app: true,
          name: currentServerName || displayName,
          display_name: displayName,
          description: description || '',
          framework,
          thumbnail: thumbnail || '',
          filepath: filepath || '',
          conda_env: conda_env || '',
          env: env ? JSON.parse(env) : null,
          custom_command: custom_command || '',
          profile: profile || '',
          public: isPublic,
          keep_alive: keepAlive,
        },
      };

      setSubmitting(true);
      if (id) {
        updateQuery(payload, {
          onSuccess: async () => {
            window.location.assign(APP_BASE_URL);
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onError: async (error: any) => {
            setSubmitting(false);
            setNotification(error.message);
          },
        });
      } else {
        createQuery(payload, {
          onSuccess: async (data) => {
            const username = currentUser?.name;
            if (username && data?.length > 1) {
              const server = data[1];
              window.location.assign(
                `${APP_BASE_URL}/spawn-pending/${username}/${server}`,
              );
            }
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onError: async (error: any) => {
            setSubmitting(false);
            setNotification(error.message);
          },
        });
      }
    }
  };

  const createRequest = async ({
    servername,
    user_options,
  }: AppQueryUpdateProps) => {
    const headers = {
      accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify({ servername, user_options }));
    if (currentFile) {
      formData.append('thumbnail', currentFile as Blob);
    }

    const response = await axios.post('/server', formData, { headers });
    return response.data;
  };

  const updateRequest = async ({
    servername,
    user_options,
  }: AppQueryUpdateProps) => {
    const headers = {
      accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    };
    const formData = new FormData();
    formData.append('data', JSON.stringify({ servername, user_options }));
    if (currentFile) {
      formData.append('thumbnail', currentFile as Blob);
    } else if (currentImage) {
      formData.append('thumbnail_data_url', currentImage);
    }

    const response = await axios.put(`/server/${servername}`, formData, {
      headers,
    });
    return response.data;
  };

  const { mutate: createQuery } = useMutation({
    mutationFn: createRequest,
    retry: 1,
  });

  const { mutate: updateQuery } = useMutation({
    mutationFn: updateRequest,
    retry: 1,
  });

  // Populate form with existing app data
  useEffect(() => {
    if (formData?.name && formData?.user_options) {
      setCurrentServerName(formData.name);
      reset({
        ...formData.user_options,
        env: formData.user_options.env
          ? JSON.stringify(formData.user_options.env)
          : undefined,
      });
      setIsPublic(formData.user_options.public);
      setKeepAlive(formData.user_options.keep_alive);
      setCurrentImage(formData.user_options.thumbnail);
    }
  }, [
    formData?.name,
    formData?.user_options,
    reset,
    setCurrentImage,
    setCurrentServerName,
  ]);

  // Populate form when returning from server-types page
  useEffect(() => {
    // istanbul ignore next
    if (currentFormInput) {
      reset({
        display_name: currentFormInput.display_name || '',
        description: currentFormInput.description || '',
        framework: currentFormInput.framework || '',
        filepath: currentFormInput.filepath || '',
        conda_env: currentFormInput.conda_env || '',
        env: currentFormInput.env
          ? JSON.stringify(currentFormInput.env)
          : undefined,
        custom_command: currentFormInput.custom_command || '',
        profile: currentFormInput.profile || '',
      });
      setIsPublic(currentFormInput.is_public);
      setKeepAlive(currentFormInput.keep_alive);
      setCurrentImage(currentFormInput.thumbnail);
    }
  }, [currentFormInput, reset, setCurrentImage, setCurrentServerName]);

  useEffect(() => {
    if (formError) {
      setNotification(formError.message);
    }
  }, [formError, setNotification]);

  return (
    <form
      id="app-form"
      onSubmit={handleSubmit(onFormSubmit)}
      className="form"
      noValidate
    >
      <div className="form-section">
        <h2>App Info</h2>
        <Controller
          name="display_name"
          control={control}
          rules={REQUIRED_FORM_FIELDS_RULES}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { ref: _, ...field } }) => (
            <FormControl>
              <TextField
                {...field}
                id="display_name"
                label="Name"
                placeholder="Add app name"
                autoFocus
                required
                error={errors.display_name?.message ? true : false}
                inputProps={{ maxLength: 255 }}
              />
            </FormControl>
          )}
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <FormControl
              fullWidth
              className="form-control"
              variant="outlined"
              style={{ position: 'relative' }}
            >
              <label
                htmlFor="description"
                className={
                  'description-label' +
                  (description.length > 0 || isFocused ? ' label-float' : '')
                }
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: description.length > 0 || isFocused ? '-10px' : '10px',
                  fontSize: '12px', // Ensure font size matches
                  color:
                    description.length > 0 || isFocused
                      ? '#ba18da '
                      : 'transparent',
                  transition: 'all 0.2s ease-out',
                  backgroundColor:
                    description.length > 0 || isFocused
                      ? 'white'
                      : 'transparent',
                  padding: '0 4px',
                  zIndex: 10,
                }}
              >
                Description
              </label>
              <textarea
                {...field}
                ref={textAreaRef}
                id="description"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  field.onChange(e.target.value);
                  adjustTextareaHeight(e.target);
                }}
                onFocus={() => {
                  setFocus(true);
                }}
                onBlur={() => {
                  field.onBlur();
                  setFocus(false);
                }}
                className="description_text-field"
                placeholder={
                  isFocused
                    ? 'Add app description (max. 200 characters)'
                    : 'Description'
                }
                style={{
                  outline: 'none',
                  width: '100%',
                  height: '80px',
                  padding: '20px 10px 10px',
                  boxSizing: 'border-box',
                  border: '1px solid #ccc',
                  backgroundColor: 'transparent',
                  overflow: 'hidden',
                  textOverflow: 'clip',
                  whiteSpace: 'pre-wrap',
                  resize: 'vertical',
                  fontFamily: 'Arial, sans-serif', // Match font
                  fontSize: '16px', // Match font size
                  lineHeight: '20px', // Adjust line height as necessary
                }}
              />
              <div
                ref={overlayRef}
                style={{
                  display: description.length > 200 ? 'block' : 'none',
                  position: 'absolute',
                  top: isFocused ? 'calc(1px + 1px)' : '1px',
                  left: isFocused ? 'calc(1px + 1px)' : '1px',
                  padding: '20px 10px 10px',
                  pointerEvents: 'none',
                  color: 'black',
                  whiteSpace: 'pre-wrap',
                  overflow: 'visbile',
                  height: '80px',
                  width: '100%',
                  boxSizing: 'border-box',
                  fontFamily: 'Arial, sans-serif', // Ensure font matches
                  fontSize: '16px', // Ensure font size matches
                  lineHeight: '20px', // Adjust line height as necessary
                  zIndex: 5,
                }}
              >
                {getStyledText()}
              </div>
              <FormHelperText
                className="form-helper-text"
                style={{
                  textAlign: 'right',
                  marginRight: '0',
                  fontSize: '1rem',
                  color: description.length > 200 ? 'red' : 'inherit',
                }}
              >
                {description.length}/200
              </FormHelperText>
            </FormControl>
          )}
        />
      </div>

      <div className="form-section">
        <h2>Configuration</h2>
        <Controller
          name="framework"
          control={control}
          rules={REQUIRED_FORM_FIELDS_RULES}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { ref: _, ...field } }) => (
            <FormControl>
              <InputLabel id="framework-label" required>
                Framework
              </InputLabel>
              <Select
                {...field}
                id="framework"
                label="Framework"
                required
                error={errors.framework?.message ? true : false}
              >
                {frameworks?.map((framework: AppFrameworkProps) => (
                  <MenuItem key={framework.name} value={framework.name}>
                    {framework.display_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        />
        {currentFramework === 'custom' ? (
          <Controller
            name="custom_command"
            control={control}
            rules={REQUIRED_FORM_FIELDS_RULES}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { ref: _, ...field } }) => (
              <FormControl>
                <TextField
                  {...field}
                  id="custom_command"
                  label="Custom Command"
                  required={currentFramework === 'custom'}
                />
              </FormControl>
            )}
          />
        ) : (
          <></>
        )}
        {environments && environments.length > 0 ? (
          <Controller
            name="conda_env"
            control={control}
            rules={REQUIRED_FORM_FIELDS_RULES}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { ref: _, ...field } }) => (
              <FormControl>
                <InputLabel id="framework-label" required>
                  Software Environment
                </InputLabel>
                <Select
                  {...field}
                  id="conda_env"
                  label="Software Environment"
                  required
                  error={errors.conda_env?.message ? true : false}
                >
                  {environments.map((env: string) => (
                    <MenuItem key={env} value={env}>
                      {env}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        ) : (
          <></>
        )}
        <Controller
          name="filepath"
          control={control}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { ref: _, ...field } }) => (
            <FormControl>
              <TextField
                {...field}
                id="filepath"
                label="File path"
                placeholder='Enter the path to the file, e.g. "/shared/users/panel_basic.py"'
                error={errors.filepath?.message ? true : false}
              />
            </FormControl>
          )}
        />
        <Controller
          name="env"
          control={control}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { ref: _, ...field } }) => (
            <FormControl>
              <TextField
                {...field}
                id="env"
                label="Environment Variables"
                placeholder={`Enter valid json: {"KEY_1":"VALUE_1","KEY_2":"VALUE_2"}`}
              />
            </FormControl>
          )}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Tooltip
            placement="bottom-start"
            title={
              <Typography sx={{ fontSize: '10px', fontWeight: 600 }}>
                Keep alive prevents the app from being suspended even when not
                in active use. Your app will be instantly available, but it will
                consume resources until manually stopped.
              </Typography>
            }
          >
            <InfoRoundedIcon
              fontSize="small"
              sx={{
                position: 'relative',
                top: '9px',
                left: '2px',
                color: '#0F10158F',
              }}
            />
          </Tooltip>
          <Controller
            name="keep_alive"
            control={control}
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            render={({ field: { ref: _, value, onChange, ...field } }) => (
              <FormControl sx={{ flexDirection: 'row' }}>
                <FormControlLabel
                  control={
                    <Switch
                      {...field}
                      id="keep_alive"
                      checked={keepAlive}
                      onChange={() => {
                        setKeepAlive(!keepAlive);
                      }}
                    />
                  }
                  label="Keep app alive"
                  labelPlacement="start"
                />
              </FormControl>
            )}
          />
        </Box>
      </div>

      <div className="form-section">
        <h2>Sharing</h2>
        <Controller
          name="is_public"
          control={control}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { ref: _, value, onChange, ...field } }) => (
            <FormControl sx={{ flexDirection: 'row' }}>
              <FormControlLabel
                control={
                  <Switch
                    {...field}
                    id="is_public"
                    checked={isPublic}
                    onChange={() => {
                      setIsPublic(!isPublic);
                    }}
                  />
                }
                label="Allow public access"
                labelPlacement="start"
                sx={{ marginLeft: '10px' }}
              />
            </FormControl>
          )}
        />
      </div>

      <div className="form-section">
        <h2>App Thumbnail</h2>
        <Controller
          name="thumbnail"
          control={control}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          render={({ field: { ref: _, value, onChange, ...field } }) => (
            <FormControl>
              <Thumbnail
                {...field}
                id="thumbnail"
                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
                currentFile={currentFile}
                setCurrentFile={setCurrentFile}
              />
            </FormControl>
          )}
        />
      </div>
      <hr />
      <div className="button-section">
        <div className="prev">
          <Button
            id="cancel-btn"
            type="button"
            variant="text"
            color="secondary"
            onClick={() => navigateToUrl(`${APP_BASE_URL}`)}
          >
            Cancel
          </Button>
        </div>
        <div className="next">
          <Button
            id="submit-btn"
            type="submit"
            variant="contained"
            color="primary"
            disabled={
              frameworksLoading ||
              environmentsLoading ||
              profilesLoading ||
              submitting
            }
          >
            {profiles && profiles.length > 0 ? (
              <>Next</>
            ) : id ? (
              <>Save</>
            ) : (
              <>Create App</>
            )}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AppForm;
