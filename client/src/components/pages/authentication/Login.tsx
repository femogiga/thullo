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
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { useLoginMutation } from '../../../api/auth';
import TaskCardStyle from '../../../api/TaskCardStyle';
const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { loginMutation } = useLoginMutation();
  const handleEmailInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    //console.log('email', email);
  };
  //const auth = useSelector((state:RootState) => state.auth.isAuthenticated);
  //const user = useSelector((state: RootState) => state.auth.user);
  //console.log('user', user);
  //console.log('auth', auth);
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    //console.log('password', password);
  };

  const handleLogin = () => {
    const data = { email: email, password: password };
     loginMutation(data);
  };
  return (
    <form
      className='login'
      style={{
        minHeight: '90vh',
        width: '100vw',
        perspective: '1000px',
        // backgroundImage: `url(${bgImage} 0 0 repeat)`,
        // transform: 'rotate(30deg)'
        position: 'relative',
        // backgroundColor: 'grey',
      }}>
      {/* <Header boardName={null} /> */}

      <div
        style={{
          position: 'absolute',
          right: '15rem',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1500px) rotateZ(2deg)  rotateX(40deg)',
          opacity: 0.7,
        }}>
        <TaskCardStyle
          headingText={'Wedding Party'}
          imgUrl={
            'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
      </div>
      <div
        style={{
          position: 'absolute',
          left: '14rem',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1500px) rotateZ(2deg)  rotateX(40deg)',
          opacity: .7,

        }}>
        <TaskCardStyle
          headingText={'Farm clearance'}
          imgUrl={
            'https://images.pexels.com/photos/162639/digger-machine-machinery-construction-162639.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
      </div>

      {/* <TaskCardStyle /> */}
      {/* <TaskCardStyle /> */}
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
      <div
        style={{
          position: 'absolute',
          bottom: '4rem',
          right: '12rem',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1500px) rotateZ(2deg)  rotateX(51deg)',
          opacity: 0.7,
        }}>
        <TaskCardStyle
          headingText={'Logistics'}
          imgUrl={
            'https://images.pexels.com/photos/104826/aircraft-holiday-sun-tourism-104826.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '8rem',
          right: '40rem',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1500px) rotateZ(2deg)  rotateX(51deg)',
          opacity: 0.7,
        }}>
        <TaskCardStyle
          headingText={'Road Contruction'}
          imgUrl={
            'https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '4rem',
          left: '30rem',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1500px) rotateZ(2deg)  rotateX(51deg)',
          opacity: 0.7,
        }}>
        <TaskCardStyle
          headingText={'PC build project'}
          imgUrl={
            'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '8rem',
          left: '6rem',
          transformStyle: 'preserve-3d',
          transform: 'perspective(1500px) rotateZ(2deg)  rotateX(51deg)',
          opacity: 0.7,
        }}>
        <TaskCardStyle
          headingText={'Shift planning'}
          imgUrl={
            'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg?auto=compress&cs=tinysrgb&w=600'
          }
        />
      </div>
    </form>
  );
};

export default Login;
