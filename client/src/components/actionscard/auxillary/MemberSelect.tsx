import { Avatar, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { NameLabel } from '../../auxillary/NameLabel';

const MemberSelect = ({ firstName, lastName, imgUrl, onAddMember }) => {
  return (
    <Link to='' onClick={onAddMember}>
      <Stack direction='row' spacing={1} alignItems={'center'}>
        <Avatar
          src={imgUrl}
          sx={{ borderRadius: '8px', width: '32px', height: '32px' }}>
          N
        </Avatar>
        <NameLabel firstName={firstName} lastName={lastName} />
      </Stack>
    </Link>
  );
};

export default MemberSelect;
