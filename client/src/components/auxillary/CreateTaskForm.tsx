import { TextField } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import ActionButton from './ActionButton';
import CrudButton from './CrudButton';
import { useCreateTaskMutation } from '../../api/taskData';

const CreateTaskForm: React.FC = ({ panelId }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const { createTaskMutation } = useCreateTaskMutation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
  };
  const handleCreateTask = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const data = { title: taskTitle, panelId: panelId };
    createTaskMutation(data);
    console.log('data=====>', data);
  };

  return (
    <form style={{ position: 'relative' }}>
      <TextField
        name='taskTitle'
        value={taskTitle}
        sx={{ m: 0.5, width: '100%' }}
        variant='outlined'
        multiline
        rows={3}
        placeholder='Enter a title for this card...'
        onChange={handleInputChange}
      />
      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem' }}>
        <CrudButton
          text={'Save'}
          colours={{ bg: '#219653', color: '#FFFFFF' }}
          onClick={handleCreateTask}
        />
      </div>
    </form>
  );
};

export default CreateTaskForm;
