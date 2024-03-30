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
import MiniCard from '../minicard/MiniCard';
import { NameLabel } from './../auxillary/NameLabel';
import NameAvatar from '../auxillary/NameAvatar';
import { Link } from 'react-router-dom';
import AddCardButton from '../auxillary/AddCardButton';
import AddListButton from '../auxillary/AddListButton';
import MemberCard from '../actionscard/MemberCard';
import { CoverCard } from '../actionscard/CoverCard';
import LabelCard from '../actionscard/LabelCard';
import { useDispatch } from 'react-redux';
import {
  setAddMemberVisible,
  setCardInfoVisible,
  setColorCardVisible,
  setCoverCardVisible,
  setMemberCardVisible,
} from '../../features/PageInformationSlice';
import { useSelector } from 'react-redux';
import { useTaskDataById, useUpdateTaskMutation } from '../../api/taskData';
import {
  useCardPanelDataByIdCard,
  usePanelDataById,
} from '../../api/panelData';
import { QuillInput } from '../auxillary/QuillInput';
import { setCardInfoEditOpen } from '../../features/visibilitySlice';
import { useEffect, useState } from 'react';
import DescriptionText from '../boardInfo/DescriptionText';

const CardInformation: React.FC = ({ taskId }) => {
  const [coverImage, setCoverImage] = useState('');

  const dispatch = useDispatch();
  const activeTaskId = useSelector((state) => state.pageInformation.taskId);
  const activePanelId = useSelector((state) => state.pageInformation.panelId);
  const cardInfoEditOpen = useSelector(
    (state) => state.visibility.cardInfoEditOpen
  );
  const [value, setValue] = useState('');
  const { taskByIdData } = useTaskDataById(activeTaskId);

  const { cardPanelByIdData } = useCardPanelDataByIdCard(activePanelId);
  const { updateTaskMutation } = useUpdateTaskMutation();
  useEffect(() => {}, [coverImage]);
  // console.log(activePanelId);
  // const { panelByIdData } = usePanelDataById(
  //   taskByIdData && taskByIdData[0]?.panelId
  // );
  //console.log('panelByIdDatatoday=====>', cardPanelByIdData);

  //console.log('taskId=====>', taskByIdData);
  const colorCardVisible = useSelector(
    (state) => state.pageInformation.colorCardVisible
  );
  const coverCardVisible = useSelector(
    (state) => state.pageInformation.coverCardVisible
  );
  const memberCardVisible = useSelector(
    (state) => state.pageInformation.memberCardVisible
  );
  const addMemberVisible = useSelector(
    (state) => state.pageInformation.addMemberVisible
  );

  //console.log('taskdata', taskByIdData);
  const handleTaskDescriptionUpdate = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const data = {
      ...taskByIdData[0],
      description: value,
      panelId: activePanelId,
    };
    console.log('taskdata', data);
    updateTaskMutation(data);
        dispatch(setCardInfoEditOpen(false));

  };
  //
  useEffect(() => { },[value])
  const handleCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(setCardInfoVisible(false));
    dispatch(setColorCardVisible(false));
    dispatch(setMemberCardVisible(false));
    dispatch(setCoverCardVisible(false));
    dispatch(setAddMemberVisible(false));
    dispatch(setCardInfoEditOpen(false));
  };

  const handleAddMemberVisible = (e) => {
    e.preventDefault();
    dispatch(setAddMemberVisible(true));
    dispatch(setCoverCardVisible(false));
    dispatch(setColorCardVisible(false));
  };

  const handleMemberCard = (e) => {
    e.preventDefault();
    dispatch(setMemberCardVisible(true));
    dispatch(setCoverCardVisible(false));
    dispatch(setColorCardVisible(false));
  };

  const handleCoverCard = (e) => {
    e.preventDefault();
    dispatch(setCoverCardVisible(true));
    dispatch(setMemberCardVisible(false));
    dispatch(setColorCardVisible(false));
    dispatch(setAddMemberVisible(false));
  };

  const handleColorCard = (e) => {
    e.preventDefault();
    dispatch(setColorCardVisible(true));
    dispatch(setMemberCardVisible(false));
    dispatch(setCoverCardVisible(false));
    dispatch(setAddMemberVisible(false));
  };

  const handleEditButton = (e) => {
    e.preventDefault();
    dispatch(setCardInfoEditOpen(!cardInfoEditOpen));
    setValue(taskByIdData && taskByIdData[0]?.description);
  };

  // const handleQuillSaveButton = (e) => {
  //   e.preventDefault();
  //   console.log('working');
  // };

  const handleCoverImageClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const clickedImageId = e.currentTarget.id;
    setCoverImage((prevCoverImage) => {
      if (clickedImageId) {
        const data = {
          ...taskByIdData[0],
          imageUrl: clickedImageId,
        };
        // console.log('taskdata', data);
        updateTaskMutation(data);
        return clickedImageId;
      }
      return prevCoverImage;
    });
  };

  return (
    <article
      style={{
        minWidth: '41.313rem',
        maxWidth: '41.313rem',
        position: 'absolute',
        padding: '1rem',
        boxShadow: '0 2px 85px 0 rgba(0,0,0,0.1)',
        zIndex: '6',
        top: '7rem',
        backgroundColor: 'rgba(255,255,255,1)',
        //backdropFilter: 'blur(505px)',
        // border: '1px solid black',
        // translate: '50%',
        // zIndex: '4',
      }}>
      <div>
        <img
          style={{
            width: '100%',
            height: '130px',
            objectFit: 'cover',
            borderRadius: '12px',
            marginBlockEnd: '1rem',
          }}
          src={
            coverImage ||
            (taskByIdData && taskByIdData[0]?.imageUrl) ||
            'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w='
          }
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
          }}
          onClick={handleCancel}>
          <ClearIcon sx={{ fontSize: '15px' }} />
        </IconButton>
      </div>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography
            gutterBottom
            component='div'
            sx={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
            <BackHandIcon sx={{ fontSize: '15px', fill: '#5C4033' }} />
            {(taskByIdData && taskByIdData[0]?.title) ||
              'Move anything that is actually started here'}
          </Typography>
          <Box>
            <Typography sx={{ fontSize: '10px', fontWeight: '600' }}>
              <span style={{ color: '#BDBDBD' }}>in list</span>{' '}
              <span> {cardPanelByIdData && cardPanelByIdData[0]?.title}</span>
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
              onClick={handleEditButton}
              text={'Edit'}
              icon={<EditIcon sx={{ fontSize: '10px' }} />}
            />
          </Stack>
          <Box>
            {cardInfoEditOpen ? (
              <QuillInput
                onSave={handleTaskDescriptionUpdate}
                onCancel={handleCancel}
                value={value}
                onChange={setValue}
              />
            ) : (
              (
                <DescriptionText
                  description={taskByIdData && taskByIdData[0]?.description}
                />
              ) || (
                <div>
                  <Typography sx={{ fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim amet quibusdam, aspernatur pariatur ipsa quos nulla
                    quam alias id vel praesentium minima saepe velit nostrum
                    illo tempore veniam laborum iste.
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim amet quibusdam, aspernatur pariatur ipsa quos nulla
                    quam alias id vel praesentium minima saepe velit nostrum
                    illo tempore veniam laborum iste.
                  </Typography>
                  <Typography sx={{ fontSize: '14px' }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </Typography>
                </div>
              )
            )}
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
          <div style={{ marginBlockEnd: '1rem' }}>
            <IconLabel
              labelText={'Actions'}
              icon={<PersonPinIcon sx={{ fontSize: '12px' }} />}
            />
          </div>
          <ActionButton
            startIcon={<GroupIcon />}
            buttonText={'Members'}
            onClick={handleAddMemberVisible}
          />
          <ActionButton
            startIcon={<LabelIcon />}
            buttonText={'Labels'}
            onClick={handleColorCard}
          />
          <ActionButton
            startIcon={<ImageIcon />}
            buttonText={'Cover'}
            onClick={handleCoverCard}
          />
          {addMemberVisible && (
            <Stack>
              <div style={{ marginBlockEnd: '1rem' }}>
                <IconLabel
                  labelText={'Members'}
                  icon={<GroupIcon sx={{ fontSize: '12px' }} />}
                />
              </div>
              <Stack
                direction='column'
                display='flex'
                spacing={1.5}
                sx={{ marginBlockEnd: '1.5rem' }}>
                <NameAvatar
                  fullName={'Jimmy Flaunt'}
                  src={''}
                  text=''
                  variant='withoutLabel'
                />
                <NameAvatar
                  fullName={'Tony Mark'}
                  src={''}
                  text=''
                  variant='withoutLabel'
                />
                <NameAvatar
                  fullName={'Natalie Griffin'}
                  src={''}
                  text=''
                  variant='withoutLabel'
                />
              </Stack>
              <Box>
                <AddCardButton
                  onClick={handleMemberCard}
                  buttonText={'Assign a member'}
                />
              </Box>
            </Stack>
          )}

          <Box position={'relative'} top='1rem'>
            {memberCardVisible && <MemberCard />}
            {coverCardVisible && (
              <CoverCard onImageSelect={handleCoverImageClick} />
            )}
            {colorCardVisible && <LabelCard taskId={activeTaskId} />}
          </Box>
        </Grid>
      </Grid>
    </article>
  );
};

export default CardInformation;
