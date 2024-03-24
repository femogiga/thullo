import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Input,
  Modal,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import LockIcon from '@mui/icons-material/Lock';
import AddIcon from '@mui/icons-material/Add';
import CrudButton from '../../auxillary/CrudButton';
import { useState } from 'react';
import { useCreateBoardMutation } from '../../../api/boardData';
import { useDispatch } from 'react-redux';
import {
  setAddBoardCoverOpen,
  setCreateBoardOpen,
} from '../../../features/visibilitySlice';
import { useNavigate } from 'react-router-dom';

const AddBoardModal: React.FC = ({ onCancel, onCover, coverImage }) => {
  // const dataToCreateBoard = { coverImage };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [boardname, setBoardname] = useState('');
  const { createBoardMutate } = useCreateBoardMutation();

  const handleCreateBoard = () => {
    const data = { name: boardname, adminId: 2, thumbnail: coverImage };
    const res = createBoardMutate(data);
    console.log(data);
    dispatch(setAddBoardCoverOpen(false));
    dispatch(setCreateBoardOpen(false));
    console.log(res);
    res.then((data) => data.result[0])
      .then((data) => navigate(`/boards/${data.id}`));
    //navigate('/boards')
  };
  console.log(boardname);
  return (
    <Box
      sx={{
        maxWidth: '307px',
        padding: '1rem',
        borderRadius: '12px',
        boxShadow: '0 2px 4px 1px rgba(0,0,0,.1)',
        backgroundColor: 'rgba(255,255,255)',
      }}>
      <div style={{ marginBlockEnd: '1rem' }}>
        <img
          style={{
            // maxWidth: '259px',
            width: '100%',
            maxHeight: '78px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
          src={
            coverImage ||
            'https://images.pexels.com/photos/18262756/pexels-photo-18262756/free-photo-of-smiling-woman-carrying-basket-on-back-with-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
          }
        />
      </div>
      <Box sx={{ marginBlockEnd: '1rem' }}>
        <input
          value={boardname}
          onChange={(e) => setBoardname(e.target.value)}
          type='text'
          style={{
            width: '100%',
            height: '34px',
            borderRadius: '8px',
            border: 'none',
            boxShadow: '0 2px 4px 1px rgba(0,0,0,.1)',
          }}
          placeholder='Add board title'
        />
      </Box>
      <Stack
        direction={'row'}
        spacing={2}
        sx={{ textTransform: 'capitalize', marginBlockEnd: '1rem' }}
        justifyContent={'space-between'}>
        <Button
          onClick={onCover}
          sx={{
            textTransform: 'capitalize',
            backgroundColor: '#F2F2F2',
            color: '#828282',
            width: '120px',
            fontSize: '12px',
          }}
          startIcon={<ImageIcon sx={{ fontSize: 11 }} />}>
          Cover
        </Button>
        <Button
          sx={{
            textTransform: 'capitalize',
            backgroundColor: '#F2F2F2',
            color: '#828282',
            width: '120px',
            display: 'flex',
            fontSize: '12px',
            alignItems: 'center',
          }}
          startIcon={<LockIcon sx={{ fontSize: 11 }} />}>
          Private
        </Button>
      </Stack>
      <Stack
        direction={'row'}
        justifyContent={'flex-end'}
        spacing={2}
        alignItems={'center'}>
        <Button
          onClick={onCancel}
          sx={{
            textTransform: 'capitalize',
            color: '#828282',
          }}>
          Cancel
        </Button>
        <CrudButton
          icon={<AddIcon sx={{ fontSize: 9 }} />}
          text={'Create'}
          colours={{ color: 'white', bg: '#2F80ED' }}
          onClick={handleCreateBoard}
        />
        {/* <Button
          sx={{
            textTransform: 'capitalize',
            backgroundColor: '#2F80ED',
            color: 'white',
            width: '120px',
            fontSize: '12px',
            alignItems: 'center',
          }}
          startIcon={<AddIcon sx={{ fontSize: 11 }} />}>
          Create
        </Button> */}
      </Stack>
    </Box>
  );
};

export default AddBoardModal;
