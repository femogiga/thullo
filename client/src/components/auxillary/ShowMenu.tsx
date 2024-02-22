import { Button } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import { usePageInformation } from '../boardInfo/hook';
const ShowMenu = () => {
  // const boardInformation = useSelector(
  //   (state) => state.boardInformation.visible
  // );
  // const dispatch = useDispatch()
  const { handleShowMenuClick } = usePageInformation()
  return (
    <div>
      <Button
        className='show-menu'
        onClick={ handleShowMenuClick}
        variant='contained'
        sx={{
          textTransform: 'capitalize',
          fontSize: '.75rem',
          backgroundColor: '#F2F2F2',
          color: 'black',
          '&:hover': { backgroundColor: '#E4F2FF' },
        }}>
        <MoreHorizRoundedIcon sx={{ marginInlineEnd: '.5rem' }} /> Show Menu
      </Button>
    </div>
  );
};

export default ShowMenu;
