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
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import quillEmoji from 'quill-emoji';
import { useEffect, useState } from 'react';
import {
  setDescriptionTextVisible,
  setEditOpen,
} from '../../features/visibilitySlice';
import { useDispatch } from 'react-redux';
import { useBoardDataId, useBoardUpdateMutation } from '../../api/boardData';
import { useParams } from 'react-router-dom';
import DescriptionText from './DescriptionText';

import { useQueryClient } from '@tanstack/react-query';
import {
  useAllUserData,
  useDeleteBoardUserMutation,
  useGetAdmin,
  useGetBoardUsers,
  useUserDataById,
} from '../../api/userData';
import { genFullname } from '../../utility/fullName';
import { QuillInput } from '../auxillary/QuillInput';
import {
  useBoardsOnUsersByboardId,
  useDeleteBoardsOnUsersMutation,
} from '../../api/boardsOnUsers';


interface IBoardInformation{
  pointer:string
}
const BoardInformation: React.FC<IBoardInformation> = ({ pointer }) => {
  const queryClient = useQueryClient();
  const { handleShowMenuClose } = usePageInformation();
  const { deleteMutate } = useDeleteBoardUserMutation();

  const { id } = useParams();
  const params = useParams();

  const { boardsOnUsersData } = useBoardsOnUsersByboardId(params.id);
  const { deleteBoardsOnUserMutation } = useDeleteBoardsOnUsersMutation();

  const { boardByIdData } = useBoardDataId(id);
  //console.log('boardIDdata', boardByIdData);
  const { boardUsersData } = useGetBoardUsers(id);
 // console.log(boardUsersData);
  //const { allUsersData } = useAllUserData();
  //const { userByIdData } = useUserDataById(3);
  const { adminUserData } = useGetAdmin(id);
  const adminUser = adminUserData && adminUserData[0];
  const fullName = adminUser?.firstname + ' ' + adminUser?.lastname;
  //console.table(allUsersData);
  //
  console.log('userByIdData', adminUser);
  //
  const { mutateAsync } = useBoardUpdateMutation();
  //console.log('boardByIdData', boardByIdData);
  //const fullName = userByIdData[0]?.firstname + ' ' + userByIdData[0]?.lastname//
  const [value, setValue] = useState('');
  const [description, setDescription] = useState(boardByIdData[0]?.description);
  ////
  const dispatch = useDispatch();
  const editOpen = useSelector((state) => state.visibility.editOpen);
  const descriptionTextVisible = useSelector(
    (state) => state.visibility.descriptionTextVisible
  );
  useEffect(() => {}, [value, description]);
  //const { EmojiBlot, ShortNameEmoji, ToolbarEmoji, TextAreaEmoji } = quillEmoji;
  // Quill.register(
  //   {
  //     'formats/emoji': EmojiBlot,
  //     'modules/emoji-shortname': ShortNameEmoji,
  //     'modules/emoji-toolbar': ToolbarEmoji,
  //     'modules/emoji-textarea': TextAreaEmoji,
  //   },
  //   true
  // );

  // const quillModules = {
  //   'emoji-toolbar': true,
  //   'emoji-textarea': true,
  //   'emoji-shortname': true,
  //   location: 0,
  //   toolbar: [
  //     [
  //       { header: [1, 2, 3, 4, 5, 6, false] },

  //       { size: ['small', false, 'large', 'huge'] },
  //     ],
  //     ['emoji'],
  //     ['bold', 'italic', 'underline', 'strike', 'blockquote', 'color'],

  //     [
  //       { list: 'ordered' },
  //       { list: 'bullet' },
  //       { indent: '-1' },
  //       { indent: '+1' },
  //       { font: [] },
  //     ],
  //     ['link'],

  //     [{ color: [] }, { background: [] }],

  //     ['clean'],
  //   ],
  //   // 'emoji-toolbar': true,
  //   // 'emoji-textarea': true,
  //   // 'emoji-shortname': true,
  // };

  const handleSave = () => {
    // const queryClient = new QueryClient();

    const data = { ...boardByIdData[0], description: value };
    console.log('data====>', data);
    mutateAsync(data);
    setDescription(value);
    // queryClient.invalidateQueries({ queryKey: 'boardDataById' });
    dispatch(setEditOpen(false));
    dispatch(setDescriptionTextVisible(true));
  };
  const handleDeleteUser = (e, authorId) => {
    e.preventDefault();
    const boardId = parseInt(params?.id);
    const data = { authorId, boardId };
    deleteMutate(data);
    queryClient.invalidateQueries({ queryKey: ['boardUsers'] });
  };

  const handleDelete = (e, authorId) => {
    e.preventDefault();
    const data = { boardId: params.id, userId: authorId };
    deleteBoardsOnUserMutation(data);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    dispatch(setEditOpen(false));
    dispatch(setDescriptionTextVisible(true));
  };
  const handleEditOpen = (e) => {
    e.preventDefault();
    setValue(boardByIdData[0]?.description);
    dispatch(setEditOpen(true));
    dispatch(setDescriptionTextVisible(false));
  };
  //console.log(value);
  //console.log('descriptionTextVisible', descriptionTextVisible);
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
        minHeight: '90vh',

        // opacity:0
      }}>
      <Stack direction='row' justifyContent='space-between' alignItems='center'>
        <Typography
          sx={{ color: 'black', fontWeight: '600', fontSize: '12px' }}>
          {(boardByIdData && boardByIdData[0]?.name) || 'Devchallenges Board'}
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
        <MiniCard height={28} width={28} src={adminUser && adminUser?.imgUrl} />

        <div>
          <p style={{ fontSize: '12px', color: 'black', fontWeight: '600' }}>
            {fullName || 'Daniel Jensen'}
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
            pointerEvents: pointer,
          }}>
          <EditIcon sx={{ fontSize: '10px' }} />
          <Typography sx={{ fontSize: '10px' }}>Edit</Typography>
        </Button>
      </Stack>
      <div
        style={{
          fontSize: '14px',
          fontWeight: '400',
          color: 'black',
          marginBlockEnd: '1rem',
        }}>
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
          <DescriptionText description={description} />
        )}
        {editOpen && (
          // <ReactQuill
          //   theme='snow'
          //   value={value}
          //   onChange={setValue}
          //   modules={quillModules}
          // />
          <QuillInput
            value={value}
            onChange={setValue}
            onSave={handleSave}
            onCancel={handleCancel}
          />
        )}
      </div>

      {/* {editOpen && (
        <Stack
          direction={'row'}
          columnGap={'1rem'}
          sx={{ marginBlockEnd: '1rem' }}>
          <CrudButton
            icon={''}
            text={'Save'}
            colours={{ bg: '#219653', color: 'white' }}
            onClick={handleSave}
          />
          <CrudButton
            icon={''}
            text={'Cancel'}
            colours={{ bg: '', color: '#828282' }}
            onClick={handleCancel}
          />
        </Stack>
      )} */}
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

      <NameAvatar
        fullName={genFullname(adminUser?.firstname, adminUser?.lastname)}
        src={adminUser?.imgUrl}
        text='Admin'
        variant='withLabel'
      />
      {boardsOnUsersData &&
        boardsOnUsersData.map((user) => (
          <NameAvatar
            id={`avatar-${user?.id}`}
            userOnTaskId={user?.id}
            src={user?.imgUrl}
            //onClick={(e) => handleDeleteUser(e, user?.id)}
            onClick={(e) => handleDelete(e, user?.id)}
            text='Delete'
            variant='withLabel'
            fullName={genFullname(user?.firstname, user?.lastname)}
            pointer={pointer}
          />
        ))}
    </article>
  );
};

export default BoardInformation;
