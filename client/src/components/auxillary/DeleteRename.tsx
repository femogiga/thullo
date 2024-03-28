import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const DeleteRename = () => {
  return (
    <Stack
      direction={'column'}
      spacing={1.2}
      sx={{
        boxShadow: '0 2px 4px 1px rgba(0,0,0,.1)',
        borderRadius: '8px',
        padding: '1rem',
        width: '151px',
        backgroundColor: 'white',
      }}>
      <Link to='/'>
        <Typography sx={{ fontSize: '10px', color: '#828282' }}>
          Rename
        </Typography>
      </Link>
      <Divider />
      <Link to='/'>
        <Typography sx={{ fontSize: '10px', color: '#828282' }}>
          Delete this list
        </Typography>
      </Link>
    </Stack>
  );
};

export default DeleteRename;
