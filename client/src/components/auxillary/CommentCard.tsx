import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import MiniCard from '../minicard/MiniCard';
import '../../index.css';
import { NameLabel } from './NameLabel';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { dateFormatter } from './../../utility/timeFormatter';
import { useEffect, useState } from 'react';
import {
  useDeleteChatMutation,
  useUpdateChatMutation,
} from '../../api/chatData';
import DoneIcon from '@mui/icons-material/Done';
import { useSelector } from 'react-redux';

interface ICommentCard {
  chatId:number
  firstName:string
  lastName:string;
  content:string;
  createdAt:string;
  imgUrl:string;
  authorId:number
  pointer:string;
}

export const CommentCard: React.FC<ICommentCard> = ({
  chatId,
  firstName,
  lastName,
  content,
  createdAt,
  imgUrl,
  authorId,
  pointer,
}) => {
  // (firstName = 'Christiano'), (lastName = 'Ronaldo');
  const activeUser = useSelector((state) => state.auth.user);
  const [deleteEditState, setDeleteEditState] = useState(false);

  useEffect(() => {
    if (activeUser.id === authorId) {
      setDeleteEditState(true);
    } else {
      setDeleteEditState(false);
    }
  }, []);
  const { updateChatMutation } = useUpdateChatMutation();
  const { deleteChatMutation } = useDeleteChatMutation();
  const [editInputVisible, setEditInputVisible] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const handleChatEditButton = (e) => {
    e.preventDefault();
    setEditInputVisible(!editInputVisible);
  };

  const handleEditChatInputChange = (e) => {
    setEditContent(e.target.value);
  };

  console.log(editContent);

  const handleChatEditSubmit = (e) => {
    e.preventDefault();
    const data = { id: chatId, content: editContent, authorId: authorId };
    const res = updateChatMutation(data);
    setEditInputVisible(false);
  };
  const handleChatDelete = async () => {
    const deleteData = { id: chatId, authorId };
    await deleteChatMutation(deleteData);
  };

  return (
    <Box className='commentcard'>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        marginBlockEnd={'1rem'}>
        <Stack direction='row' alignItems={'center'} spacing={1}>
          <MiniCard src={imgUrl} width={'32px'} height={'32px'} />
          <Box>
            <NameLabel firstName={firstName} lastName={lastName} />
            <Typography sx={{ fontSize: '10px', color: '#BDBDBD' }}>
              {dateFormatter(createdAt) || '24 August at 20:43'}
            </Typography>
          </Box>
        </Stack>
        {deleteEditState && (
          <Stack
            direction='row'
            alignItems={'center'}
            spacing={1}
            className='deleteEdit'>
            <Link
              to=''
              onClick={handleChatEditButton}
              className='buttonlink edit'>
              Edit
            </Link>
            <p className='hypen'> - </p>
            <Link
              to=''
              onClick={handleChatDelete}
              className='buttonlink delete'>
              Delete
            </Link>
          </Stack>
        )}
      </Stack>
      {editInputVisible ? (
        <form style={{ position: 'relative' }}>
          <TextField
            // onFocus={handleInputAvatar}
            // onBlur={handleInputAvatar}
            onChange={handleEditChatInputChange}
            value={editContent}
            style={{
              borderColor: '#BDBDBD',

              boxShadow: '0 2px 4px 0 rgba(0 ,0, ,0,.05)',
            }}
            placeholder='Write a comment'
            fullWidth
            multiline
            rows={2}
          />

          <IconButton
            color='primary'
            aria-label='add to shopping cart'
            onClick={handleChatEditSubmit}
            sx={{
              textTransform: 'capitalize',
              right: '0.6rem',
              bottom: '.3rem',
              position: 'absolute',
              color: 'white',
              padding: '0',

              backgroundColor: '#2F80ED',
              //backgroundColor: 'lightgreen',
              borderRadius: '8px',
              fontSize: '10px',
              '&:hover': {
                backgroundColor: 'green',
              },
            }}>
            <DoneIcon />
          </IconButton>
        </form>
      ) : (
        <Typography sx={{ marginBlockEnd: '1rem', fontSize: '14px' }}>
          {content || 'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
        </Typography>
      )}
      <Divider sx={{ marginBlockEnd: '1rem' }} />
    </Box>
  );
};
