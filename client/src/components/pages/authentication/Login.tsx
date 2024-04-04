import React, { ChangeEvent, useState } from 'react';
import Header from '../../header/Header';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import logo from '../../../assets/Logo-small.svg';
import { MuiFileInput } from 'mui-file-input';
import bgImage from '../../../assets/cardsbeat.png';

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
import { useLoginMutation } from '../../../api/auth';
import { useSelector } from 'react-redux';
const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginMutation } = useLoginMutation();
  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    console.log('email', email);
  };
  const auth = useSelector((state) => state.auth.isAuthenticated)
    const user = useSelector((state) => state.auth.user);
console.log('user',user)
  console.log('auth', auth);
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    console.log('password', password);
  };

  const handleLogin = () => {
    const data = { email:email, password:password };
    const res = loginMutation(data);
  };
  return (
    <form
      className='login'
      style={{
        height: '100vh',
        width: '100vw',
        // backgroundImage: `url(${bgImage} 0 0 repeat)`,
        // transform: 'rotate(30deg)'
        position: 'relative',
      }}>
      {/* <Header boardName={null} /> */}

      <Card
        sx={{
          maxWidth: 500,
          marginInline: 'auto',
          marginBlockStart: '10vh',
          minHeight: '40vh',
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
            id='email'
            name='email'
            onChange={handleEmailInputChange}
            label=''
            fullWidth
            value={email}
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
              label=''
              name='password'
              onChange={handlePasswordInputChange}
              value={password}
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
          </Box>
        </CardContent>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}>
          <Button
            size='small'
            onClick={handleLogin}
            sx={{
              textTransform: 'capitalize',
              backgroundColor: '#219653',
              minWidth: '15rem',
              color: 'white',
              '&:hover': {
                backgroundColor: 'darkgreen',
              },
            }}>
            Sign in
          </Button>
        </CardActions>
        <CardContent sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant='body2' color='text.primary.light'>
            Don't have an account?
            <span style={{ padding: '.3rem' }}>
              <Link to='/register' style={{ color: 'blue' }}>
                Register
              </Link>
            </span>
          </Typography>
        </CardContent>
      </Card>
    </form>
  );
};

export default Login;
