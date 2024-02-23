import { Box, Stack, Typography } from '@mui/material';
import IconLabel from './IconLabel';
import CrudButton from './CrudButton';

const AttachmentCard = ({ src }) => {
  src =
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600';
  return (
    <Box marginBlockEnd={'1rem'}>
      <Stack direction='row' spacing='1rem'>
        <div style={{ maxWidth: '5rem', borderRadius: '8px' }}>
          <img src={src} alt='' style={{ borderRadius: '8px' }} />
        </div>
        <div style={{ marginBlockEnd: '5px' }}>
          <IconLabel icon={null} labelText='...Added July 5,2020' />
          <Typography
            sx={{ fontSize: '10px', fontWeight: '500', marginBlockEnd: '5px' }}>
            Reasoning by Ragnanath Krishma
          </Typography>
          <Stack direction='row' spacing='9px'>
            <CrudButton icon='' text={'Download'} />
            <CrudButton icon='' text={'Delete'} />
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default AttachmentCard;
