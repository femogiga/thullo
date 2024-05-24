import {  Stack, Typography } from '@mui/material';

interface IIconLabel {
  labelText:string;
  icon:React.ReactNode
}
const IconLabel: React.FC<IIconLabel> = ({ labelText, icon }) => {
  return (
    <div style={{ minWidth: '4.4rem' }}>
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
