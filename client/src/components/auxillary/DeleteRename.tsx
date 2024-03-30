import {
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  TextField,
  FormControl,
} from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import Visibility from './Visibility';
import { useDispatch } from 'react-redux';
import { setRenameInputVisible } from '../../features/visibilitySlice';
import { SmartButton } from '@mui/icons-material';
import { useUpdatePanelMutation } from '../../api/panelData';

const DeleteRename: React.FC = ({panelId,isPanelVisible}) => {
  const dispatch = useDispatch();
  const { id } = useParams()
  console.log('id: ' + id)
  const renameInputVisible = useSelector(
    (state) => state.visibility.renameInputVisible
  );
    const {updatePanelMutation } = useUpdatePanelMutation()

    const[title,setTitle] = useState('')
  const handleRenameLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setRenameInputVisible(!renameInputVisible));
  };

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  }

  const handleTitleUpdate = (e) => {
    e.preventDefault()
    const data = { title: title,panelId:panelId ,boardId:id}
    const response = updatePanelMutation(data)
    dispatch(setRenameInputVisible(false))

  }
  const handleListPanelDelete = () => {
    
  }
  return (
    <Stack
      direction={'column'}
      spacing={1.2}
      sx={{
        boxShadow: '0 2px 4px 1px rgba(0,0,0,.1)',
        borderRadius: '8px',
        padding: '1rem',
        width: '9.5rem',
        backgroundColor: 'white',
      }}>
      <form onSubmit={handleTitleUpdate}>
        <Link to='' onClick={handleRenameLinkClick}>
          <Typography sx={{ fontSize: '10px', color: '#828282' }}>
            Rename
          </Typography>
        </Link>
        {renameInputVisible && (
          <div>
            <TextField
              size='small'
              value={title}
              onChange={handleTitleInputChange}
            />
          </div>
        )}
      </form>
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
