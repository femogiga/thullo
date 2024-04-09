import { Box, Button, TextField } from '@mui/material';
import MiniCard from './../minicard/MiniCard';
import CrudButton from '../auxillary/CrudButton';
import { SyntheticEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCreateChatMutation } from '../../api/chatData';

const CommentInput = ({ src }) => {
  const [content, setContent] = useState('');
  const [inputAvatarVisible, setInputAvatarVisible] = useState(true);
  const handleInputAvatar = (e) => {
    if (e.type === 'focus') {
      setInputAvatarVisible(false);
      return;
    }
    if (e.type === 'blur') {
      setInputAvatarVisible(true);
      return;
    }
  };

  useEffect(() => {}, [inputAvatarVisible]);
  console.log(inputAvatarVisible);
  const { createChatMutation } = useCreateChatMutation();
  const activeTaskId = useSelector((state) => state.pageInformation.taskId);
  const currentUser = useSelector((state) => state.auth.user);
  // console.log(currentUser);
  // console.log(content)
  const handleChatInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleCreateChat = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const message = {
      content: content,
      authorId: currentUser.id,
      taskId: activeTaskId,
    };
    const res = createChatMutation(message);
    setContent('');
  };
  return (
    <Box
      className='comment-input'
      sx={{ position: 'relative', border: 'none' }}>
      {inputAvatarVisible && (
        <div
          style={{ position: 'absolute', left: '.7rem', top: '.6rem' }}
          className='avatar'>
          <MiniCard src={src} height={'28'} width={'28'} />
        </div>
      )}
      <form>
        <TextField
          onFocus={handleInputAvatar}
          onBlur={handleInputAvatar}
          onChange={handleChatInputChange}
          value={content}
          style={{
            borderColor: '#BDBDBD',

            boxShadow: '0 2px 4px 0 rgba(0 ,0, ,0,.05)',
          }}
          placeholder='Write a comment'
          fullWidth
          multiline
          rows={4}
        />
        <div style={{ position: 'absolute', bottom: '.6rem', right: '.6rem' }}>
          <Button
            onClick={handleCreateChat}
            sx={{
              textTransform: 'capitalize',
              width: '71.5px',
              color: 'white',
              backgroundColor: '#2F80ED',
              borderRadius: '8px',
              fontSize: '10px',
              '&:hover': {
                backgroundColor: 'blue',
              },
            }}>
            Comment
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default CommentInput;
