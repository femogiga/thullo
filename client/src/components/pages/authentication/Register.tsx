import React, { ChangeEvent, useState } from 'react';
import Header from '../../header/Header';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import logo from '../../../assets/Logo-small.svg';
import { MuiFileInput } from 'mui-file-input';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  InputAdornment,
  TextField,
  Typography,
  capitalize,
} from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Link } from 'react-router-dom';
import { useRegisterMutation } from '../../../api/auth';

interface IRegister {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  picture: File;
}
const Register: React.FC = () => {
  const { registerMutation } = useRegisterMutation();
  const [registrationData, setRegistrationData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    picture: null,
  });

  const [photo, setPhoto] = useState(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegistrationData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const { firstname, lastname, email, password, confirmPassword } =
    registrationData;

  const handleFileChange = (newFile) => {
    setPhoto(newFile);
  };

  const handleRegistration = async () => {
    const formData = new FormData();
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('photo', photo);

    await registerMutation(formData);
  };
  //console.log('registrationData', registrationData);
  //console.log('photo', photo);
  return (
    <div>
      <form
        encType='multipart/form-data'
        onSubmit={handleRegistration}
        style={{
          background:
            'url(https://media.istockphoto.com/id/1196849410/photo/a-calendar-on-february-29-on-a-leap-year-leap-day.jpg?b=1&s=612x612&w=0&k=20&c=cGcySvg8GVKqo4j9Gum_hsXD4nqQbipsGMRnkrh33PI=)',
          height: '100vh',
          padding: '10vh',
        }}>
        <Card
          sx={{
            maxWidth: 600,
            marginInline: 'auto',
            // marginBlockStart: '10vh',
          }}>
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              padding: '2rem',
            }}>
            <div className='flex col-gap-1'>
              <img src={logo} />
              <p className='bold'>Thullo</p>
            </div>
            <TextField
              id='firstname'
              name='firstname'
              onChange={handleInputChange}
              value={firstname}
              label=''
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant='outlined'
              placeholder='First name'
              size='small'
            />
            <TextField
              id='lastname'
              name='lastname'
              onChange={handleInputChange}
              value={lastname}
              label=''
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant='outlined'
              placeholder='Last name'
              size='small'
            />
            <TextField
              id='email'
              name='email'
              onChange={handleInputChange}
              value={email}
              label=''
              fullWidth
              type='email'
              placeholder='Email'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              variant='outlined'
              size='small'
            />
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <TextField
                id='password'
                name='password'
                onChange={handleInputChange}
                value={password}
                label=''
                type='password'
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                variant='outlined'
                placeholder='Password'
                size='small'
              />
              <TextField
                id='confirmPassword'
                name='confirmPassword'
                onChange={handleInputChange}
                value={confirmPassword}
                label=''
                fullWidth
                type='password'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                variant='outlined'
                placeholder='Retype password '
                size='small'
              />
            </Box>
            <MuiFileInput
              id={'photo'}
              name='photo'
              onChange={handleFileChange}
              value={photo}
              placeholder=''
              size='small'
              label='Profile picture'
              //getSizeText={(value) => 'Very big'}
              InputProps={{
                inputProps: {
                  accept: '.png, .jpeg',
                },
                startAdornment: <AttachFileIcon />,
              }}
              sx={{ width: '10rem' }}
            />
          </CardContent>
          <CardActions
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}>
            <Button
              onClick={handleRegistration}
              size='small'
              sx={{
                textTransform: 'capitalize',
                backgroundColor: '#219653',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'darkgreen',
                },
              }}>
              Submit
            </Button>
            <Button
              size='small'
              sx={{
                textTransform: 'capitalize',
                backgroundColor: '#828282',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#4F4F4F',
                },
              }}>
              Clear
            </Button>
          </CardActions>
          <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
            <Typography variant='body2' color='text.primary.light'>
              Already registered ?{' '}
              <span style={{ padding: '.3rem' }}>
                {' '}
                <Link to='/login' style={{ color: 'blue' }}>
                  Login
                </Link>
              </span>
            </Typography>
          </CardContent>
        </Card>
      </form>
    </div>
  );
};

export default Register;
