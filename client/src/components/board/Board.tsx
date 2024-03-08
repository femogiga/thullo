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
        justifyContent: 'center',
       
      }}>
      {children}
    </Stack>
  );
};

export default Board;
