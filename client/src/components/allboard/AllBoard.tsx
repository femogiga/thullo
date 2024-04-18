import { Box, Stack, Typography } from '@mui/material';
import Board from './../board/Board';
import BoardCard from './auxillary/BoardCard';
import CrudButton from '../auxillary/CrudButton';
import AddIcon from '@mui/icons-material/Add';
import AddBoardModal from './auxillary/AddBoardModal';
import {
  useAllBoardData,
  useAllBoardDataWithUser,
  useCreateBoardMutation,
} from '../../api/boardData';
import { Link, useNavigate } from 'react-router-dom';
import { useAllBoardPageData } from '../../api/allBoardPageData';
import IsLoading from './../auxillary/IsLoading';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
  setAddBoardCoverOpen,
  setCreateBoardOpen,
} from '../../features/visibilitySlice';
import { CoverCard } from '../actionscard/CoverCard';
import { useState } from 'react';
import { useAllUserData } from '../../api/userData';
import { setActiveBoardId } from '../../features/PageInformationSlice';

const AllBoard: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [coverImage, setCoverImage] = useState('');
  const createBoardModalVisible = useSelector(
    (state) => state.visibility.createBoardOpen
  );

  const addBoardCoverOpen = useSelector(
    (state) => state.visibility.addBoardCoverOpen
  );
  const { isPending, error, data } = useAllBoardData();
  const { error: allBoardError, data: allBoardPageData } =
    useAllBoardPageData();

  const { allBoardPagePending, allBoardDataWithUser } =
    useAllBoardDataWithUser();
  const { allUserData } = useAllUserData();
  //console.log(allUserData)

  //console.log(allBoardPageData, allBoardPageData)
  const handleOpenAddBoardModal = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(setCreateBoardOpen(!createBoardModalVisible));
  };

  const handleAddBoardModalClose = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(setCreateBoardOpen(false));
    dispatch(setAddBoardCoverOpen(false));
  };

  const handleCoverButtonClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(setAddBoardCoverOpen(!addBoardCoverOpen));
  };
  //console.log(allBoardPageData);
  const { createBoardMutate } = useCreateBoardMutation();

  // const handleCreateBoard = () => {
  //   const data = {name,adminId,thumbnail,description}
  //     const res = createBoardMutate(data)
  // }
  // background
  const handleBoardCardClick = (e: React.SyntheticEvent, link) => {
    navigate(link);
    window.location.reload();
  };



  const handleCoverImageClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setCoverImage(e.currentTarget.id);
  };
  //console.log(coverImage);
  return (
    <Box className='container' sx={{ width: '100%', position: 'relative' }}>
      <Board direction={'column'}>
        {/* <Stack direction={'row'} justifyContent={'space-between'}>
          <Typography>All Boards</Typography>

          <CrudButton
            text={'Add'}
            colours={{ color: 'white', bg: '#2F80ED' }}
            icon={<AddIcon sx={{ fontSize: 10 }} />}
            onClick={handleOpenAddBoardModal}
          />
        </Stack> */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            placeItems: 'center',
            minHeight: '80vh',
            padding: '2rem',
            rowGap: '2rem',
            maxWidth: '100vw',
            //alignContent: 'space-between',
            // border: '1px solid black',
            // minHeight:'70vh'
          }}>
          <Stack
            direction={'row'}
            justifyContent={'space-between'}
            // border='1px solid black'
            width='100%'>
            <Typography>All Boards</Typography>

            <CrudButton
              text={'Add'}
              colours={{ color: 'white', bg: '#2F80ED' }}
              icon={<AddIcon sx={{ fontSize: 10 }} />}
              onClick={handleOpenAddBoardModal}
            />
          </Stack>
          <Stack
            direction={'row'}
            gap='1rem'
            // justifyContent={'space-around'}

            sx={{
              flexWrap: 'wrap',
              maxWidth: '100%',
            }}>
            {allBoardPagePending ? (
              <IsLoading />
            ) : (
              allBoardDataWithUser &&
              allBoardDataWithUser.map((board) => (
                // <Link to={`/boards/${board.id}`} key={`board-${board.id}`}>
                <Link
                  onClick={(e) =>
                    handleBoardCardClick(e, `/boards/${board.id}`)
                  }
                  key={`board-${board.id}`}>
                  <BoardCard
                    key={board.id}
                    name={board.name}
                    boardId={board?.id}
                    thumbnail={board.thumbnail}
                    userPhotos={board.userphotos}
                    adminId={board?.adminId}
                    admin={
                      allUserData &&
                      allUserData.find((user) => user?.id === board?.adminId)
                    }
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
        {createBoardModalVisible && (
          <Box
            sx={{
              position: 'absolute',
              zIndex: '10',
              top: '1rem',
              right: '44%',
            }}>
            <AddBoardModal
              onCover={handleCoverButtonClick}
              onCancel={handleAddBoardModalClose}
              coverImage={coverImage}
            />
          </Box>
        )}
        {addBoardCoverOpen && (
          <Box
            sx={{
              position: 'absolute',
              zIndex: '10',
              left: '30%',
              top: '28%',
            }}>
            <CoverCard onImageSelect={handleCoverImageClick} />
          </Box>
        )}
      </Board>
    </Box>
  );
};

export default AllBoard;
