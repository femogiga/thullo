import { Stack } from '@mui/material';

const Board = ({ children ,direction}) => {
  return (
    <Stack
      direction={direction}
      spacing='2rem'
      sx={{
        display: 'flex',
        paddingBlock: '1rem',
        backgroundColor: '#F8F9FD',
        borderRadius: '0rem',
        justifyContent: 'center',
       // backgroundColor: 'rgba(0, 0, 0, 0.4)',

      }}>
      {children}
    </Stack>
  );
};

export default Board;
