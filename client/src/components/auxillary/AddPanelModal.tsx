import { Box, Stack, Typography, TextField } from '@mui/material';
import React from 'react';
import CrudButton from './CrudButton';

interface IAddPanelModal {
  onChange: () => void;
  onSave: () => void;
}
const AddPanelModal: React.FC<IAddPanelModal> = ({ onChange, onSave }) => {
  return (
    <Stack
      direction={'column'}
      spacing={1.2}
      sx={{
        boxShadow: '0 2px 4px 1px rgba(0,0,0,.1)',
        borderRadius: '8px',
        padding: '1rem',
        width: '15.3rem',
        backgroundColor: 'white',
      }}>
      <Box>
        <Typography sx={{ fontSize: '', color: '#828282' }}>Title</Typography>
        <TextField onChange={onChange} />
      </Box>
      {/* <Divider /> */}

      <CrudButton
        pointer={''}
        text={'Save'}
        icon={null}
        colours={{ bg: '#219653', color: 'white' }}
        onClick={onSave}
      />
    </Stack>
  );
};

export default AddPanelModal;
