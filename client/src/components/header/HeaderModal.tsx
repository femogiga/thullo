import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
} from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Person2Icon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated, setUser } from '../../features/authSlice';
import { persistor } from '../../store';

const HeaderModal:React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loginLogoutVisible, setLoginLogoutVisible] = useState({
    logoutOpen: true,
    loginOpen: false,
  });

  // const handleLogout = () => {
  //   dispatch(setIsAuthenticated(false));
  //   dispatch(setUser(null));
  // };

  const handleLoginLogout = (type: string) => {
    if (type === 'logout') {
      dispatch(setIsAuthenticated(false));
      dispatch(setUser(null));
      persistor.purge();
      navigate('/login');
      setLoginLogoutVisible({ logoutOpen: false, loginOpen: true });
      localStorage.removeItem('userData');
      localStorage.removeItem('token');
    } else {
      setLoginLogoutVisible({
        logoutOpen: true,
        loginOpen: false,
      });
    }
  };
  return (
    <Paper sx={{ minWidth: '8rem' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Button
            sx={{ textTransform: 'capitalize' }}
            startIcon={<Person2Icon sx={{ width: '1rem' }} />}>
            Profile
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          {loginLogoutVisible.loginOpen && (
            <Button
              onClick={() => handleLoginLogout('login')}
              sx={{ textTransform: 'capitalize' }}
              startIcon={<LockIcon sx={{ width: '1rem' }} />}>
              Login
            </Button>
          )}

          {loginLogoutVisible.logoutOpen && (
            <Button
              onClick={() => handleLoginLogout('logout')}
              sx={{ textTransform: 'capitalize' }}
              startIcon={<LockOpenIcon sx={{ width: '1rem' }} />}>
              Logout
            </Button>
          )}
        </Box>
      </CardContent>{' '}
    </Paper>
  );
};

export default HeaderModal;
