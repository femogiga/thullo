import { Avatar, Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import { NameLabel } from '../auxillary/NameLabel';

const MemberSelect = () => {
  return (
    <Link to=''>
      <Stack direction='row' spacing={1} alignItems={'center'}>
        <Avatar sx={{ borderRadius: '8px', width: '32px',height:'32px' }}>N</Avatar>
        <NameLabel firstName={'Jimmy'} lastName={'John'} />
      </Stack>
    </Link>
  );
}

export default MemberSelect
