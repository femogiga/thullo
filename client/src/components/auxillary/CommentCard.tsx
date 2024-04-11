import {
  Box,
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import MiniCard from '../minicard/MiniCard';
import { NameLabel } from './NameLabel';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { dateFormatter } from './../../utility/timeFormatter';
import { useState } from 'react';
import { useUpdateChatMutation } from '../../api/chatData';
import DoneIcon from '@mui/icons-material/Done';
export const CommentCard = ({
  chatId,
  firstName,
  lastName,
  content,
  createdAt,
  imgUrl,
  authorId,
}) => {
  // (firstName = 'Christiano'), (lastName = 'Ronaldo');
  const { updateChatMutation } = useUpdateChatMutation();
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
    const data = { id: chatId, content: editContent ,authorId:authorId};
    const res = updateChatMutation(data);
    setEditInputVisible(false);
  };
  const handleChatDelete = () => {};

  return (
    <Box>
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
        <Stack direction='row' alignItems={'center'} spacing={1}>
          <Link to='' onClick={handleChatEditButton}>
            Edit
          </Link>
          <p> - </p>
          <Link to='/'>Delete</Link>
        </Stack>
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
