import {
  Avatar,
  AvatarGroup,
  Card,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import BackHandIcon from '@mui/icons-material/BackHand';
import AddIcon from '@mui/icons-material/Add';

const TaskCardStyle = ({ imgUrl, headingText, chipLabelOne, chipLabelTwo }) => {
  return (
    <div className='taskCardStyle'>
      <Card
        sx={{
          maxWidth: 243,
          height: 290,
          // boxShadow: '0 0 5px rgba(0, 0, 0,.2)',
          opacity: 1,
          borderRadius: '12px',
          transformStyle: 'preserve-3d',
          boxShadow:
            '1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01), 28px 28px 28px 0 rgba(34, 33, 81, 0.25)',
        }}>
        <CardContent>
          <CardMedia
            sx={{
              width: 219,
              height: 130,
              marginBlockEnd: '1rem',
              borderRadius: '12px',
            }}
            image={
              imgUrl ||
              'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
            title='green iguana'
          />
          <Typography
            gutterBottom
            component='div'
            sx={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
            <BackHandIcon sx={{ fontSize: '1rem', fill: '#5C4033' }} />
            {headingText || 'Move anything ready here'}
          </Typography>
          <Stack direction='row' spacing={1} sx={{ marginBlockEnd: '1.2rem' }}>
            <Chip label={chipLabelOne || 'Clickable'} />
            <Chip label={chipLabelTwo || 'Clickable'} />
          </Stack>
          <Stack
            direction='row'
            spacing={1}
            justifyContent='flex-start'
            alignItems='centre'>
            <AvatarGroup>
              <Avatar
                variant='square'
                sx={{ width: '1.8rem', height: '1.8rem', borderRadius: '8px' }}
                src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
              />
              <Avatar
                variant='square'
                sx={{ width: '1.8rem', height: '1.8rem', borderRadius: '8px' }}
                src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600'
              />
            </AvatarGroup>
            <IconButton aria-label='delete' sx={{ borderRadius: '8px' }}>
              <AddIcon
                sx={{
                  backgroundColor: '#2F80ED',
                  color: 'white',
                  width: '1.8rem',
                  height: '1.8rem',
                }}
              />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCardStyle;
