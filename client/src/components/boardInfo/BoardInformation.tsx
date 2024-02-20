import { Button, Stack, Typography, capitalize } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MiniCard from '../minicard/MiniCard';
import Divider from '@mui/material/Divider';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FeedIcon from '@mui/icons-material/Feed';
import EditIcon from '@mui/icons-material/Edit';
const BoardInformation = () => {
  return (
    <article style={{ border: '1px solid black', width: '377px' }}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography>Devchallenges Board</Typography>
        <ClearIcon />
      </Stack>
      <Divider />
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <PersonPinIcon /> <span>Made by</span>
      </Stack>
      <Stack direction='row' alignItems='center' columnGap='1rem'>
        <MiniCard height={28} width={28} src='' />

        <div>
          <p style={{ fontSize: '12px' }}>Daniel Jensen</p>
          <p style={{ fontSize: '10px' }}>on 4 July,2020</p>
        </div>
      </Stack>
      <Stack direction='row' spacing='1rem'>
        <Stack direction='row' alignItems='center'>
          <FeedIcon />
          <Typography>Description</Typography>
        </Stack>
        <Button sx={{ textTransform: 'capitalize'}}>
          <EditIcon />
          <Typography>Edit</Typography>
        </Button>
      </Stack>
    </article>
  );
};

export default BoardInformation;
