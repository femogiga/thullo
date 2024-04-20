import { Stack } from '@mui/material';
interface IBoard{
  children: React.ReactNode,
  direction:'row' | 'column' | 'column-reverse'
}
const Board: React.FC<IBoard> = ({ children, direction }) => {
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
