import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Paper,
  Avatar,
  Stack,
  FormControl,
  Button,
} from '@mui/material';
import React from 'react';
import { IconButton } from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { NameLabel } from './../auxillary/NameLabel';
import MemberSelect from './MemberSelect';
import CrudButton from '../auxillary/CrudButton';

const MemberCard = () => {
  return (
    <Card
      className='member-card'
      sx={{
        maxWidth: '245.28px',
        width: '245.28px',
        maxHeight: '315px',
        height: '315px',
        display: 'flex',
      }}>
      <CardContent>
        <FormControl>
          <Typography sx={{ fontSize: '12px', fontWeight: '600' }}>
            Members
          </Typography>
          <Typography
            sx={{ fontSize: '12px', marginBlockEnd: '.5rem', color: '#828282' }}>
            Assign members to this card
          </Typography>

          <Box sx={{ marginBlockEnd: '1.1rem' }}>
            <TextField className='user-input' rows={1} placeholder='User...' />
          </Box>
          <Paper
            variant='elevation'
            elevation={2}
            sx={{ padding: '1rem', marginBlockEnd: '1rem' }}>
            <Stack direction={'column'} spacing={1.4}>
              <MemberSelect />
              <MemberSelect />
              <MemberSelect />
            </Stack>
          </Paper>
          <Stack direction={'row'} justifyContent={'center'}>
            <CrudButton text='invite' icon={null} colours={{ color: 'white', bg: '#2F80ED' }} />
          </Stack>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
