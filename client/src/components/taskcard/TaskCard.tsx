import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import Chips from './auxillary/Chips';
import MiniCard from '../minicard/MiniCard';
import AddButton from '../auxillary/AddButton';

const TaskCard = () => {
  return (
    <div>
      <Card sx={{ maxWidth: 243, height: 290 }}>
        <CardContent>
          <CardMedia
            sx={{ width: 219, height: 130, marginBlockEnd: '.25rem' }}
            image='https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'
            title='green iguana'
          />

          <Typography gutterBottom component='div'>
            Move anything ready here
          </Typography>
          <Stack direction='row' spacing={1} sx={{ marginBlockEnd: '1rem' }}>
            <Chips taskType={'Design'}  />
            <Chips taskType={'Front-end'} />
          </Stack>
          <Stack direction='row' spacing={1}>
            <MiniCard height={28} width={28} src='' />
            <MiniCard height={28} width={28} src='' />
            <AddButton width={28} height={28} />
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCard;
