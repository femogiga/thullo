import { Button, Stack, Typography, capitalize } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MiniCard from '../minicard/MiniCard';
import Divider from '@mui/material/Divider';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FeedIcon from '@mui/icons-material/Feed';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NameAvatar from '../auxillary/NameAvatar';
const BoardInformation = () => {
  return (
    <article
      style={{
        border: '1px solid black',
        width: '377px',
        fontSize: '10px',
        color: '#BDBDBD',
      }}>
      <Stack direction='row' justifyContent='space-between'>
        <Typography
          sx={{ color: 'black', fontWeight: '600', fontSize: '12px' }}>
          Devchallenges Board
        </Typography>
        <IconButton aria-label='close'>
          <ClearIcon />
        </IconButton>
      </Stack>
      <Divider />
      <Stack direction='row' justifyContent='flex-start' alignItems='center'>
        <PersonPinIcon sx={{ fontSize: '10px' }} /> <span>Made by</span>
      </Stack>
      <Stack direction='row' alignItems='center' columnGap='1rem'>
        <MiniCard height={28} width={28} src='' />

        <div>
          <p style={{ fontSize: '12px', color: 'black', fontWeight: '600' }}>
            Daniel Jensen
          </p>
          <p style={{ fontSize: '10px' }}>on 4 July,2020</p>
        </div>
      </Stack>
      <Stack direction='row' spacing='1rem' marginBlock={'1rem'}>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
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
      <div style={{ fontSize: '14px', fontWeight: '400', color: 'black' }}>
        <p>Simple board to start on a board</p>
        <p className='flow-1'>
          <span style={{ fontWeight: '600' }}>* Backlog </span>:Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Illo, molestias
          delectus. Eum nobis
        </p>
        <p>There are 4 list here</p>
        <p className='flow-1'>
          <span style={{ fontWeight: '600' }}>* In Progress </span>: Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Officia maiores doloribus
          nemo velit consequatur perspiciatis ratione nostrum iste saepe ipsam
          culpa earum explicabo, eveniet voluptatum aperiam molestias veritatis
          nam amet.
        </p>

        <p className='flow-1'>
          <span style={{ fontWeight: '600' }}>* In Review </span>:Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Officia maiores doloribus
          nemo velit consequatur perspiciatis ratione nostrum iste saepe ipsam
          culpa earum explicabo, eveniet voluptatum aperiam molestias veritatis
          nam amet.
        </p>

        <p className='flow-1'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          maiores doloribus nemo velit consequatur perspiciatis
        </p>
      </div>

      <Stack direction='row' alignItems='center' justifyContent='' gap='.3rem'>
        <FeedIcon sx={{ fontSize: '10px' }} />
        <Typography sx={{ fontSize: '10px' }}>Team</Typography>
      </Stack>

      {/* <Stack direction='row' alignItems='center' justifyContent='space-between'>
        <Stack direction='row' alignItems='center' columnGap='1rem'>
          <MiniCard height={28} width={28} src='' />

          <div>
            <p style={{ fontSize: '12px', color: 'black', fontWeight: '600' }}>
              Daniel Jensen
            </p>
          </div>
        </Stack>
        <div>
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
            <MoreHorizIcon sx={{ fontSize: '10px' }} />
            <Typography sx={{ fontSize: '10px' }}>Admin</Typography>
          </Button>
        </div>
      </Stack> */}

      <NameAvatar src={''} text='Admin'  />
      <NameAvatar src={''} text='Delete' />
      <NameAvatar src={''} text='Delete' />
    </article>
  );
};

export default BoardInformation;