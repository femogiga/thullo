import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  TextField,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import CrudButton from './CrudButton';
import { useSelector } from 'react-redux';

const AddPanelModal = (onSave) => {
  return (
    <Stack
      direction={'column'}
      spacing={1.2}
      sx={{
        boxShadow: '0 2px 4px 1px rgba(0,0,0,.1)',
        borderRadius: '8px',
        padding: '1rem',
        width: '96%',
        backgroundColor: 'white',
      }}>
      <Link to=''>
        <Typography sx={{ fontSize: '10px', color: '#828282' }}>
          title
        </Typography>
        <TextField />
      </Link>
      {/* <Divider /> */}

      <CrudButton
        text={'Save'}
        icon={null}
        colours={{ bg: '#219653', color: 'white' }}
        onClick={onSave}
      />
    </Stack>
  );
};

export default AddPanelModal;
