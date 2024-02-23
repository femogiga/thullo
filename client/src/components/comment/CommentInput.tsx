import { Box, Button, TextField } from '@mui/material';
import MiniCard from './../minicard/MiniCard';
import CrudButton from '../auxillary/CrudButton';

const CommentInput = ({ src }) => {
  return (
    <Box
      className='comment-input'
      sx={{ position: 'relative', border: 'none' }}>
      <div style={{ position: 'absolute', left: '.7rem', top: '.6rem' }} className='avatar'>
        <MiniCard src={src} height={'28'} width={'28'} />
      </div>

      <TextField
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
    </Box>
  );
};

export default CommentInput;
