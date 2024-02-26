import { Stack } from '@mui/material';

const Board = ({ children ,direction}) => {
  return (
    <Stack
      direction={direction}
      spacing='2rem'

      sx={{
        display: 'flex',
        padding: '1rem',
        backgroundColor: '#F8F9FD',
        borderRadius: '2rem',

      }}>
      {children}
    </Stack>
  );
};

export default Board;
