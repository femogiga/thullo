import { Button, Stack, Typography, capitalize } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import MiniCard from '../minicard/MiniCard';
import Divider from '@mui/material/Divider';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import FeedIcon from '@mui/icons-material/Feed';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import NameAvatar from '../auxillary/NameAvatar';
import { usePageInformation } from './hook';
import { useSelector } from 'react-redux';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import {
  setDescriptionTextVisible,
  setEditOpen,
} from '../../features/visibilitySlice';
import { useDispatch } from 'react-redux';
import { useBoardDataId } from '../../api/boardData';
import { useParams } from 'react-router-dom';
import DescriptionText from './DescriptionText';
import AddButton from '../auxillary/AddButton';
import ActionButton from '../auxillary/ActionButton';
import CrudButton from '../auxillary/CrudButton';
const BoardInformation = () => {
  const { handleShowMenuClose } = usePageInformation('');
  const { id } = useParams();
  const { boardByIdData } = useBoardDataId(id);
  console.log('boardByIdData', boardByIdData);
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const editOpen = useSelector((state) => state.visibility.editOpen);
  const descriptionTextVisible = useSelector(
    (state) => state.visibility.descriptionTextVisible
  );

  const handleEditOpen = (e) => {
    e.preventDefault();
    setValue(boardByIdData[0]?.description);
    dispatch(setEditOpen(true));
    dispatch(setDescriptionTextVisible(false));
  };
  console.log('descriptionTextVisible', descriptionTextVisible);
  return (
    <article
      className='boardInformation'
      style={{
        // border: '1px solid black',
        width: '377px',
        fontSize: '10px',
        color: '#BDBDBD',
        padding: '1rem 2rem',
        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        backgroundColor: 'rgba(255,255,255)',

        // opacity:0
      }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography
          sx={{ color: 'black', fontWeight: '600', fontSize: '12px' }}>
          Devchallenges Board
        </Typography>
        <IconButton
          aria-label='close'
          sx={{ fontSize: '24px' }}
          onClick={handleShowMenuClose}>
          <ClearIcon />
        </IconButton>
      </Stack>
      <Divider sx={{ marginBlockEnd: '1rem' }} />
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
          onClick={handleEditOpen}
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
      <div style={{ fontSize: '14px', fontWeight: '400', color: 'black',marginBlockEnd:'1rem' }}>
        {/* <p>Simple board to start on a board</p>
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
        </p> */}
        {descriptionTextVisible && (
          <DescriptionText description={boardByIdData[0]?.description} />
        )}
        {editOpen && (
          <ReactQuill theme='snow' value={value} onChange={setValue} />
        )}
      </div>

      {editOpen && (<Stack direction={'row'} columnGap={'1rem'} sx={{ marginBlockEnd: '1rem' }}>
        <CrudButton
          icon={''}
          text={'Save'}
          colours={{ bg: '#219653', color: 'white' }}
        />
        <CrudButton
          icon={''}
          text={'Cancel'}
          colours={{ bg: '', color: '#828282' }}
        />
      </Stack>)
      }
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

      <NameAvatar src={''} text='Admin' variant='withLabel' />
      <NameAvatar src={''} text='Delete' variant='withLabel' />
      <NameAvatar src={''} text='Delete' variant='withLabel' />
    </article>
  );
};

export default BoardInformation;
