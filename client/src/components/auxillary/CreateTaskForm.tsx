import { TextField } from '@mui/material';
import React from 'react';
import ActionButton from './ActionButton';
import CrudButton from './CrudButton';

const CreateTaskForm: React.FC = ({ onClick }) => {
  return (
    <form style={{ position: 'relative' }}>
      <TextField
        sx={{ m: 0.5, width: '100%' }}
        variant='outlined'
        multiline
        rows={3}
        placeholder='Enter a title for this card...'
      />
      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
        <CrudButton
          text={'Save'}
          colours={{ bg: '#219653', color: '#FFFFFF' }}
          onClick={''}
        />
      </div>
    </form>
  );
};

export default CreateTaskForm;
