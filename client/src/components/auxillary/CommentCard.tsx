import { Box, Stack, Typography } from '@mui/material';
import MiniCard from '../minicard/MiniCard';
import { NameLabel } from './NameLabel';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export const CommentCard = ({ firstName, lastName }) => {
  (firstName = 'Christiano'), (lastName = 'Ronaldo');
  return (
    <Box>
      <Stack
        direction={'row'}
        justifyContent={'space-between'}
        marginBlockEnd={'1rem'}>
        <Stack direction='row' alignItems={'center'} spacing={1}>
          <MiniCard src={''} width={'32px'} height={'32px'} />
          <Box>
            <NameLabel firstName={firstName} lastName={lastName} />
            <Typography sx={{ fontSize: '10px', color: '#BDBDBD' }}>
              24 August at 20:43
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi assumenda
        odio minus sed nesciunt recusandae accusamus repellendus suscipit
        delectus iste asperiores provident, est molestias ducimus autem cum
        aliquid dolore aliquam?
      </Typography>
      <Divider sx={{ marginBlockEnd: '1rem' }} />
    </Box>
  );
};
