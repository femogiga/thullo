import { Button, Stack } from '@mui/material';
import React from 'react';

const ActionButton = ({ startIcon, buttonText }) => {
  /**
   ** Button with a start icon
   *
   *
   */
  return (
    <Stack direction='row' spacing={2} style={{ marginBlockEnd: '1rem' }}>
      <Button
        variant='text'
        startIcon={startIcon}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '148.98px',
          textTransform: 'capitalize',
          fontSize: '12px',
          color: '#828282',
          borderColor: '#F2F2F2',
          backgroundColor: '#F2F2F2',
          paddingLeft: '1rem',
        }}>
        {buttonText}
      </Button>
    </Stack>
  );
};

export default ActionButton;
