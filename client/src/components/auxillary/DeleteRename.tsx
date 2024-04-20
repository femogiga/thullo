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
import {
  setDeletePanelButtonsVisible,
  setRenameInputVisible,
} from '../../features/visibilitySlice';
import {
  useDeletePanelMutation,
  useUpdatePanelMutation,
} from '../../api/panelData';
import CrudButton from './CrudButton';

interface IDeleteRename {
  panelId: number;
  isPanelVisible: boolean;
}

const DeleteRename: React.FC<IDeleteRename> = ({ panelId, isPanelVisible }) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  //console.log('id: ' + id);
  //console.log(panelId);
  const renameInputVisible = useSelector(
    (state) => state.visibility.renameInputVisible
  );
  const deletePanelButtonsVisible = useSelector(
    (state) => state.visibility.deletePanelButtonsVisible
  );
  const { updatePanelMutation } = useUpdatePanelMutation();
  const { deletePanelMutation } = useDeletePanelMutation();

  const [title, setTitle] = useState('');
  const handleRenameLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(setRenameInputVisible(!renameInputVisible));
    dispatch(
      setDeletePanelButtonsVisible({
        operation: true,
        buttons: false,
      })
    );
  };

  const handleTitleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    //console.log(e.target.value);
  };

  const handleTitleUpdate = (e) => {
    e.preventDefault();
    const data = { title: title, panelId: panelId, boardId: id };
    const response = updatePanelMutation(data);
    dispatch(setRenameInputVisible(false));
  };
  const handleListPanelDeleteClick = (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    const { operation, buttons } = deletePanelButtonsVisible;
    dispatch(setRenameInputVisible(false));

    dispatch(
      setDeletePanelButtonsVisible({
        operations: false,
        buttons: !buttons,
      })
    );
  };

  const handleYesClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const data = { boardId: id, panelId: panelId };
    deletePanelMutation(panelId);
  };

  const handleNoClick = (e: React.FormEvent<HTMLButtonElement>) => {
    const { operation, buttons } = deletePanelButtonsVisible;

    e.preventDefault();

    dispatch(
      setDeletePanelButtonsVisible({
        operation: true,
        buttons: false,
      })
    );
    // window.location.reload();
  };
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
      {deletePanelButtonsVisible.operation && (
        <Link onClick={handleListPanelDeleteClick}>
          <Typography sx={{ fontSize: '10px', color: '#828282' }}>
            Delete this list
          </Typography>
        </Link>
      )}
      {deletePanelButtonsVisible.buttons && (
        <div>
          <Typography
            sx={{
              fontSize: '10px',
              color: '#828282',
              marginBlockEnd: '.5rem',
            }}>
            Are you sure you want to delete this list?
          </Typography>

          <Stack direction='row' spacing={0.5}>
            <CrudButton
              text='Yes'
              colours={{ bg: '#EB5757', color: 'white' }}
              onClick={handleYesClick}
              icon={null}
            />
            <CrudButton
              text='No'
              colours={{ bg: '#4F4F4F', color: 'white' }}
              onClick={handleNoClick}
              icon={null}
            />
          </Stack>
        </div>
      )}
    </Stack>
  );
};

export default DeleteRename;
