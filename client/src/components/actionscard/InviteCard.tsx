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
import {
  useBoardsOnUsersByboardId,
  useBoardsOnUsersMutation,
} from './../../api/boardsOnUsers';
import { useAllUserData } from '../../api/userData';

const InviteCard = ({ setShowInviteForm }) => {
  const params = useParams();
  const { boardsOnUsersData } = useBoardsOnUsersByboardId(params.id);
  const { boardsOnUserMutation } = useBoardsOnUsersMutation();
  const { allUserData } = useAllUserData();
  //const newboardsOnUsersData = boardsOnUsersData.slice(0, 3)

  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchedMemberId, setSearchedMemberId] = useState<string>('');

  const [searchedMember, setSearchedMember] = useState('');

  const onClickMember = (e, firstname, lastname, id) => {
    e.preventDefault();
    setSearchTerm(firstname + ' ' + lastname);
    setSearchedMemberId(id);
  };

  console.log(searchedMemberId);
  //
  useEffect(() => {}, [searchedMemberId]);

  // const handleAddMember = (authorId) => {
  //   /**
  //    * TODO  ADD  THE MUTATION FUNCTION
  //    */
  //   //const data = { authorId, taskId: activeTaskId, boardId: params.id };
  //   //addUserToTaskMutation(data);
  //   setSearchedMember('');
  //   setSearchedMemberId('');
  // };
  const handleInviteMember = async () => {
    const data = { boardId: params.id, userId: searchedMemberId };
    await boardsOnUserMutation(data);
    setSearchTerm('');
    setSearchedMemberId('');
    setShowInviteForm(false);
  };
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
            Invite to board
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              marginBlockEnd: '.5rem',
              color: '#828282',
            }}>
            Search for users to invite
          </Typography>

          <Box sx={{ marginBlockEnd: '1.1rem', position: 'relative' }}>
            <TextField
              value={searchTerm}
              className='user-input'
              rows={1}
              placeholder='User...'
              onChange={(e) => setSearchTerm(e.target.value)}
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
              {allUserData &&
                allUserData
                  .filter(
                    (item) =>
                      item.firstname
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      item.lastname
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                      (item.firstname + ' ' + item.lastname)
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase())
                  )
                  .map((member) => (
                    <MemberSelect
                      key={`member-${member?.id} `}
                      firstName={member.firstname}
                      lastName={member?.lastname}
                      imgUrl={member?.imgUrl}
                      onClickMember={(e) =>
                        onClickMember(
                          e,
                          member?.firstname,
                          member?.lastname,
                          member?.id
                        )
                      }
                    />
                  ))
                  .slice(0, 3)}
              {/* <MemberSelect />
              <MemberSelect /> */}
            </Stack>
          </Paper>
          <Stack direction={'row'} justifyContent={'center'}>
            <CrudButton
              text='invite'
              icon={null}
              colours={{ color: 'white', bg: '#2F80ED' }}
              onClick={handleInviteMember}
            />
          </Stack>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default InviteCard;
