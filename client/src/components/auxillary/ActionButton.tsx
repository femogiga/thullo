import { Button, Stack } from '@mui/material';
import React from 'react';

interface IActionButton {
  startIcon: React.ReactNode;
  buttonText: string;
  onClick: (e:React.MouseEvent) => void;
  pointer:'auto' | 'none' |''
}

const ActionButton:React.FC<IActionButton> = ({ startIcon, buttonText, onClick, pointer }) => {
  /**
   ** Button with a start icon
   *
   *
   */
  return (
    <Stack direction='row' spacing={2} style={{ marginBlockEnd: '1rem' }}>
      <Button
        onClick={onClick}
        variant='text'
        startIcon={startIcon}
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          width: '9.311rem',
          textTransform: 'capitalize',
          fontSize: '12px',
          color: '#828282',
          borderColor: '#F2F2F2',
          backgroundColor: '#F2F2F2',
          paddingLeft: '1rem',
          pointerEvents: pointer,
        }}>
        {buttonText}
      </Button>
    </Stack>
  );
};

export default ActionButton;
