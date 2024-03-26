import { Button, Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
const PanelName = ({ icon, listName, onClick }) => {
  const style = { fontWeight: 'bold' };
  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <p style={style}>
        {listName} <span className='icon'>{icon}</span>
      </p>
      <Button variant='text' onClick={onClick}>
        <MoreHorizIcon />
      </Button>
    </Stack>
  );
};

export default PanelName;
