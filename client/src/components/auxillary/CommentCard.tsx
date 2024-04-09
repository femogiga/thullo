import { Box, Stack, Typography } from '@mui/material';
import MiniCard from '../minicard/MiniCard';
import { NameLabel } from './NameLabel';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { dateFormatter } from './../../utility/timeFormatter';

export const CommentCard = ({
  firstName,
  lastName,
  content,
  createdAt,
  imgUrl,
}) => {
  // (firstName = 'Christiano'), (lastName = 'Ronaldo');
  return (
    <Box>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        marginBlockEnd={'1rem'}>
        <Stack direction='row' alignItems={'center'} spacing={1}>
          <MiniCard src={imgUrl} width={'32px'} height={'32px'} />
          <Box>
            <NameLabel firstName={firstName} lastName={lastName} />
            <Typography sx={{ fontSize: '10px', color: '#BDBDBD' }}>
              {dateFormatter(createdAt) || '24 August at 20:43'}
            </Typography>
          </Box>
        </Stack>
        <Stack direction='row' alignItems={'center'} spacing={1}>
          <Link to='/'>Edit</Link>
          <p> - </p>
          <Link to='/'>Delete</Link>
        </Stack>
      </Stack>
      <Typography sx={{ marginBlockEnd: '1rem', fontSize: '14px' }}>
        {content || 'Lorem ipsum dolor sit amet consectetur adipisicing elit'}
      </Typography>
      <Divider sx={{ marginBlockEnd: '1rem' }} />
    </Box>
  );
};
