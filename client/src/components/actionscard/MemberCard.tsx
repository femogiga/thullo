import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Paper,
  Avatar,
  Stack,
  FormControl,
  Button,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import IconButton from '@mui/material/IconButton';
import { Link, useParams } from 'react-router-dom';
import { NameLabel } from './../auxillary/NameLabel';
import MemberSelect from './auxillary/MemberSelect';
import CrudButton from '../auxillary/CrudButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { setMemberCardVisible } from '../../features/PageInformationSlice';
import { useAllUserData, useGetAdmin } from '../../api/userData';
import { useUserOnTasksMutation } from '../../api/usersOnTaskData';
import { useSelector } from 'react-redux';
import { useBoardsOnUsersByboardId } from '../../api/boardsOnUsers';

const MemberCard = () => {
  const params = useParams();
  const { allUserData } = useAllUserData();
  const { addUserToTaskMutation } = useUserOnTasksMutation();
    const { boardsOnUsersData } = useBoardsOnUsersByboardId(params.id);

  const activeTaskId = useSelector((state) => state.pageInformation.taskId);

  console.log(allUserData);
  const [searchedMember, setSearchedMember] = useState('');
    const [searchedMemberId, setSearchedMemberId] = useState('');


  console.log(searchedMember);
  const handleSearchChange = (e) => {
    setSearchedMember(e.target.value);
  };

  const handleAddMember = (authorId) => {
    const data = { authorId, taskId: activeTaskId, boardId: params.id };
    addUserToTaskMutation(data);
    setSearchedMember('')
    setSearchedMemberId('')
  };
  const onClickMember = (e, fullName,id) => {
    setSearchedMember(fullName);
    setSearchedMemberId(id)
  };

  useEffect(() => {}, [searchedMember]);
  return (
    <Card
      className='member-card'
      sx={{
        maxWidth: '245.28px',
        width: '15.33rem',
        maxHeight: '315px',
        height: '315px',
        display: 'flex',
        borderRadius: '8px',
        position: 'absolute',
        zIndex: '4',
      }}>
      <CardContent>
        <FormControl>
          <Typography sx={{ fontSize: '12px', fontWeight: '600' }}>
            Members
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              marginBlockEnd: '.5rem',
              color: '#828282',
            }}>
            Assign members to this card
          </Typography>

          <Box sx={{ marginBlockEnd: '1.1rem', position: 'relative' }}>
            <TextField
              value={searchedMember}
              className='user-input'
              rows={1}
              placeholder='User...'
              onChange={handleSearchChange}
            />
            <IconButton
              sx={{
                borderRadius: '8px',
                backgroundColor: '#2F80ED',
                color: 'white',
                position: 'absolute',
                right: '.2rem',
                top: '.2rem',
              }}>
              <SearchIcon sx={{ fontSize: '.9rem' }} />
            </IconButton>
          </Box>
          <Paper
            variant='elevation'
            elevation={2}
            sx={{ padding: '1rem', marginBlockEnd: '1rem' }}>
            <Stack direction={'column'} spacing={1.4}>
              {boardsOnUsersData &&
                boardsOnUsersData
                  .filter(
                    (item) =>
                      item.firstname
                        .toLowerCase()
                        .includes(searchedMember.toLowerCase()) ||
                      item.lastname
                        .toLowerCase()
                        .includes(searchedMember.toLowerCase()) ||
                      item.firstname + ' ' + item.lastname === searchedMember
                  )
                  .map((userData) => (
                    <MemberSelect
                      key={`userdata-${userData.id}`}
                      firstName={userData?.firstname}
                      lastName={userData?.lastname}
                      imgUrl={userData.imgUrl}
                      onClickMember={(e) =>
                        onClickMember(
                          e,
                          userData?.firstname + ' ' + userData?.lastname,
                          userData?.id
                        )
                      }
                      //onAddMember={() => handleAddMember(userData?.id)}
                    />
                  )).slice(0,3)}
              {/* <MemberSelect />
              <MemberSelect /> */}
            </Stack>
          </Paper>
          <Stack direction={'row'} justifyContent={'center'}>
            <CrudButton
              text='invite'
              icon={null}
              colours={{ color: 'white', bg: '#2F80ED' }}
              onClick={() => handleAddMember(searchedMemberId)}
            />
          </Stack>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
