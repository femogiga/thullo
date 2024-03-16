import { Button, Stack, Typography } from '@mui/material';
import MiniCard from '../minicard/MiniCard';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const NameAvatar = ({
  src,
  text,
  variant,
  fullName,
  userOnTaskId,
  onClick,
}) => {
  const borderStyle =
    text === 'Admin'
      ? { color: '#BDBDBD ', border: '0px solid #BDBDBD ' }
      : { color: '#EB5757', border: '1px solid #EB5757' };
  return (
    <Stack direction='row' alignItems='center' justifyContent='space-between'>
      <Stack direction='row' alignItems='center' columnGap='1rem'>
        <MiniCard height={28} width={28} src={src} />

        <div>
          <p style={{ fontSize: '12px', color: 'black', fontWeight: '600' }}>
            {fullName || 'Daniel Jensen'}
          </p>
        </div>
      </Stack>
      <Stack direction='row' alignItems='flex-end' gap='.3rem'>
        {variant == 'withLabel' ? (
          <Button
            onClick={onClick}
            sx={{
              textTransform: 'capitalize',
              width: '62px',
              height: '24px',
              borderRadius: '8px',
              // display: 'flex',
              //   justifyContent: 'center',
              // alignItems: 'center',
              // gap: '.3rem',
              border: borderStyle,
              borderColor: borderStyle.color,
              color: borderStyle.color || '#828282',
              marginBlockEnd: '1rem',
            }}>
            {text === 'Admin' ? (
              <MoreHorizIcon sx={{ fontSize: '10px', color: '#BDBDBD' }} />
            ) : null}
            <Typography sx={{ fontSize: '10px', color: borderStyle.color }}>
              {text}
            </Typography>
          </Button>
        ) : null}
      </Stack>
    </Stack>
  );
};

export default NameAvatar;
