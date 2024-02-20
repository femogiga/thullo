import { Stack } from '@mui/material';

const Board = ({ children }) => {
  return (
    <Stack
      direction='row'
      spacing='2rem'
      sx={{
        display: 'flex',
        padding: '2rem 2rem',
        backgroundColor: '#F8F9FD',
        borderRadius: '2rem',
      }}>
      {children}
    </Stack>
  );
};

export default Board;
