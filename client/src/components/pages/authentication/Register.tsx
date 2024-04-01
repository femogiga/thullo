import React from 'react';
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
const Register: React.FC = () => {
  return (
    <div>
      <Card
        sx={{ maxWidth: 600, marginInline: 'auto', marginBlockStart: '10vh' }}>
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
            id='input-with-icon-textfield'
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
            id='input-with-icon-textfield'
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
            id='input-with-icon-textfield'
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
              id='input-with-icon-textfield'
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
              id='input-with-icon-textfield'
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
            //   value={'value'}
            //   onChange={'handleChange'}
            placeholder='Insert a file'
            size='small'
            label='Profile picture'
            getSizeText={(value) => 'Very big'}
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
    </div>
  );
};

export default Register;
