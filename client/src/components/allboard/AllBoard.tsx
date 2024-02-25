import { Box, Stack, Typography } from '@mui/material';
import Header from '../header/Header';
import Board from './../board/Board';
import TaskCard from './../taskcard/TaskCard';
import BoardCard from './auxillary/BoardCard';
import AddButton from './../auxillary/AddButton';
import CrudButton from '../auxillary/CrudButton';
import AddIcon from '@mui/icons-material/Add';

const AllBoard = () => {
  return (
    <div className='container'>
      <Stack direction={'row'} justifyContent={'space-between'}>
        <Typography>All Boards</Typography>

        <CrudButton
          text={'Add'}
          colours={{ color: 'white', bg: '#2F80ED' }}
          icon={<AddIcon sx={{ fontSize: 10 }} />}
        />
      </Stack>
      <Board>
        <Stack
          direction={'row'}
          gap='1rem'
          justifyContent={'space-between'}
          sx={{ flexWrap: 'wrap' }}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </Stack>
      </Board>
    </div>
  );
};

export default AllBoard;
