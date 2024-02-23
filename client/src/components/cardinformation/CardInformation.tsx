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
import CrudButton from '../auxillary/CrudButton';
import IconLabel from '../auxillary/IconLabel';
import { Add, Edit } from '@mui/icons-material';
import AttachmentCard from '../auxillary/AttachmentCard';
import CommentInput from '../comment/CommentInput';
import { CommentCard } from '../auxillary/CommentCard';
const CardInformation = () => {
  return (
    <article
      style={{
        maxWidth: '41.313rem',
        position: 'relative',
        padding: '1rem',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.05)',
        border: '1px solid black',
      }}>
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

          <Stack
            direction='row'
            spacing='1rem'
            marginBlock={'1rem'}
            alignItems='center'>
            <IconLabel
              labelText={'Description'}
              icon={<FeedIcon sx={{ fontSize: '10px' }} />}
            />
            <CrudButton
              text={'Edit'}
              icon={<EditIcon sx={{ fontSize: '10px' }} />}
            />
          </Stack>
          <Box>
            <Typography sx={{ fontSize: '14px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet
              quibusdam, aspernatur pariatur ipsa quos nulla quam alias id vel
              praesentium minima saepe velit nostrum illo tempore veniam laborum
              iste.
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim amet
              quibusdam, aspernatur pariatur ipsa quos nulla quam alias id vel
              praesentium minima saepe velit nostrum illo tempore veniam laborum
              iste.
            </Typography>
            <Typography sx={{ fontSize: '14px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </Typography>
          </Box>
          <Stack
            direction='row'
            spacing='1rem'
            marginBlock={'1rem'}
            alignItems='center'>
            <IconLabel
              labelText={'Attachments'}
              icon={<FeedIcon sx={{ fontSize: '10px' }} />}
            />
            <CrudButton text={'Add'} icon={<Add sx={{ fontSize: '10px' }} />} />
          </Stack>
          <Box sx={{ marginBlockEnd: '2rem' }}>
            <AttachmentCard src='' />
            <AttachmentCard src='' />
          </Box>
          <Box sx={{ marginBlockEnd: '2rem' }}>
            <CommentInput src={''} />
          </Box>
          <div>
            <CommentCard firstName={''} lastName={''} />
            <CommentCard firstName={''} lastName={''} />
          </div>
        </Grid>

        <Grid item xs={3}>
          <div>
            <IconLabel
              labelText={'Actions'}
              icon={<PersonPinIcon sx={{ fontSize: '12px' }} />}
            />
          </div>
          <ActionButton startIcon={<GroupIcon />} buttonText={'Members'} />
          <ActionButton startIcon={<LabelIcon />} buttonText={'Labels'} />
          <ActionButton startIcon={<ImageIcon />} buttonText={'Cover'} />
        </Grid>
      </Grid>
    </article>
  );
};

export default CardInformation;
