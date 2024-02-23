import { Button, Stack, Typography } from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
const IconLabel = ({ labelText, icon }) => {
  return (
    <div>
      <Stack direction='row' spacing='1rem'>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='center'
          color='#BDBDBD'
          gap='.3rem'>
          {/* <FeedIcon sx={{ fontSize: '10px' }} /> */}
          {icon || icon}
          <Typography sx={{ fontSize: '10px' }}>{labelText}</Typography>
        </Stack>
      </Stack>
    </div>
  );
};

export default IconLabel;
