import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Chips from './auxillary/Chips';
import MiniCard from '../minicard/MiniCard';
import AddButton from '../auxillary/AddButton';
import CommentIcon from '@mui/icons-material/Comment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BackHandIcon from '@mui/icons-material/BackHand';
import InviteCard from '../actionscard/InviteCard';
import useUserHook from './hook/useUserHook';
import { useEffect, useState } from 'react';

const TaskCard = () => {
  // const { handleAddUserButton, show, setShow } = useUserHook;
  const [show, setShow] = useState(false);
  useEffect(() => {}, [show]);

  const handleAddUserButton = (e) => {
    e.preventDefault();
    //dispatch()
    setShow(!show);
  };
  return (
    <div>
      <Card
        sx={{
          maxWidth: 243,
          height: 290,
          boxShadow: '0 4 12 0 rgba(0 0 0.05)',
          borderRadius: '12px',
        }}
        draggable>
        <CardContent>
          <CardMedia
            sx={{
              width: 219,
              height: 130,
              marginBlockEnd: '1rem',
              borderRadius: '12px',
            }}
            image='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'
            title='green iguana'
          />
          <Typography
            gutterBottom
            component='div'
            sx={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
            <BackHandIcon sx={{ fontSize: '1rem', fill: '#5C4033' }} /> Move
            anything ready here
          </Typography>
          <Stack direction='row' spacing={1} sx={{ marginBlockEnd: '1.2rem' }}>
            <Chips taskType={'Design'} />
            <Chips taskType={'Concept'} />
          </Stack>
          <Stack
            direction='row'
            spacing={1}
            justifyContent='space-between'
            alignItems='centre'>
            <Stack direction='row' spacing={1} alignItems={'center'}>
              <MiniCard height={28} width={28} src='' />
              <MiniCard height={28} width={28} src='' />
              <AddButton width={28} height={28} onClick={handleAddUserButton} />
            </Stack>
            <Stack direction='row' spacing={1} alignItems={'center'}>
              <IconButton>
                <CommentIcon sx={{ width: '12px', marginRight: '.5rem' }} />
                <Typography sx={{ fontSize: '10px' }}>{2}</Typography>
              </IconButton>
              <IconButton>
                <AttachFileIcon sx={{ width: '12px', marginRight: '.5rem' }} />
                <Typography sx={{ fontSize: '10px' }}>{2}</Typography>
              </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
      {show && (
        <Box sx={{ position: 'absolute', top: '9rem', zIndex: '6' }}>
          <InviteCard />
        </Box>
      )}
    </div>
  );
};

export default TaskCard;
