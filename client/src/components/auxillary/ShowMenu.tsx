import { Button } from '@mui/material';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
const ShowMenu = () => {
  return (
    <div>
      <Button
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
