import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import BackHandIcon from '@mui/icons-material/BackHand';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import ActionButton from '../auxillary/ActionButton';
import GroupIcon from '@mui/icons-material/Group';
import LabelIcon from '@mui/icons-material/Label';
import ImageIcon from '@mui/icons-material/Image';
import EditIcon from '@mui/icons-material/Edit';
import FeedIcon from '@mui/icons-material/Feed';
import ClearIcon from '@mui/icons-material/Clear';
const CardInformation = () => {
  return (
    <article style={{ maxWidth: '41.313rem', position: 'relative' }}>
      <div>
        <img
          style={{
            width: '100%',
            height: '130px',
            objectFit: 'cover',
            borderRadius: '12px',
          }}
          src='https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w='
        />
        <IconButton
          aria-label='close'
          sx={{
            fontSize: '24px',
            position: 'absolute',
            top: '-1rem',
            right: '-1rem',
            zIndex: 4,
            backgroundColor: '#2F80ED',
            color: 'white',
            '&:hover': {
              backgroundColor: 'orangered',
            },
            borderRadius: '8px',
          }}>
          <ClearIcon sx={{ fontSize: '15px' }} />
        </IconButton>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography
            gutterBottom
            component='div'
            sx={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
            <BackHandIcon sx={{ fontSize: '15px', fill: '#5C4033' }} /> Move
            anything that is actually started here
          </Typography>
          <Box>
            <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
              <span style={{ color: '#BDBDBD' }}>in list</span>{' '}
              <span> in Progress</span>
            </Typography>
          </Box>
          <Stack direction='row' spacing='1rem' marginBlock={'1rem'}>
            <Stack
              direction='row'
              alignItems='center'
              justifyContent='center'
              color='#BDBDBD'
              gap='.3rem'>
              <FeedIcon sx={{ fontSize: '10px' }} />
              <Typography sx={{ fontSize: '10px' }}>Description</Typography>
            </Stack>
            <Button
              sx={{
                textTransform: 'capitalize',
                width: '62px',
                height: '24px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                gap: '.3rem',
                border: '1px solid #BDBDBD',
                color: '#828282',
              }}>
              <EditIcon sx={{ fontSize: '10px' }} />
              <Typography sx={{ fontSize: '10px' }}>Edit</Typography>
            </Button>
          </Stack>

          <Box>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet
              quibusdam, aspernatur pariatur ipsa quos nulla quam alias id vel
              praesentium minima saepe velit nostrum illo tempore veniam laborum
              iste.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet
              quibusdam, aspernatur pariatur ipsa quos nulla quam alias id vel
              praesentium minima saepe velit nostrum illo tempore veniam laborum
              iste.
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Stack
            direction='row'
            justifyContent='flex-start'
            alignItems='center'
            marginBlockEnd='1rem'
            gap='.3rem'
            fontSize='12px'
            color='#BDBDBD'>
            <PersonPinIcon sx={{ fontSize: '12px' }} /> <span>Actions</span>
          </Stack>
                  <ActionButton startIcon={<GroupIcon  />} buttonText={'Members'} />
          <ActionButton startIcon={<LabelIcon />} buttonText={'Labels'} />
          <ActionButton startIcon={<ImageIcon />} buttonText={'Cover'} />
        </Grid>
      </Grid>
    </article>
  );
};

export default CardInformation;
