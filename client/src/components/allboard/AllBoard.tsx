import { Box, Stack, Typography } from '@mui/material';
import Board from './../board/Board';
import BoardCard from './auxillary/BoardCard';
import CrudButton from '../auxillary/CrudButton';
import AddIcon from '@mui/icons-material/Add';
import AddBoardModal from './auxillary/AddBoardModal';
import { useAllBoardData } from '../../api/boardData';
import { Link } from 'react-router-dom';
import { useAllBoardPageData } from '../../api/allBoardPageData';
import IsLoading from './../auxillary/IsLoading';

const AllBoard = () => {
  const { isPending, error, data } = useAllBoardData();
  const {
    isPending: allBoardPagepending,
    error: allBoardError,
    data: allBoardPageData,
  } = useAllBoardPageData();

  console.log(allBoardPageData);

  return (
    <Box className='container' sx={{ position: 'relative' }}>
      <Board direction={'column'}>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography>All Boards</Typography>

          <CrudButton
            text={'Add'}
            colours={{ color: 'white', bg: '#2F80ED' }}
            icon={<AddIcon sx={{ fontSize: 10 }} />}
          />
        </Stack>
        <Box
          sx={{
            display: 'grid',
            placeItems: 'center',
            // border: '1px solid black',
          }}>
          <Stack
            direction={'row'}
            gap='1rem'
            // justifyContent={'space-around'}

            sx={{
              flexWrap: 'wrap',
              maxWidth: '70%',
            }}>
            {allBoardPagepending ? (
              <IsLoading />
            ) : (
              allBoardPageData &&
              allBoardPageData.map((board) => (
                <Link to={`/boards/${board.id}`}>
                  <BoardCard
                    key={board.id}
                    name={board.name}
                    boardId={board.id}
                    thumbnail={board.thumbnail}
                    userPhotos={board.userphotos}
                  />
                </Link>
              ))
            )}
            {/* <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard /> */}
          </Stack>
        </Box>
        {false && (
          <Box sx={{ position: 'absolute', zIndex: '5', right: '38%' }}>
            <AddBoardModal />
          </Box>
        )}
      </Board>
    </Box>
  );
};

export default AllBoard;
