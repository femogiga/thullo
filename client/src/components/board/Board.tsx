import { Stack } from '@mui/material';

const Board = ({ children }) => {
  return (
    <Stack direction='row' spacing='2rem'>
      {children}
    </Stack>
  );
};

export default Board;
