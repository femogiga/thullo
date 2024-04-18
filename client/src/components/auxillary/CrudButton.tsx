import { Box, Button, Stack, Typography } from '@mui/material';
import FeedIcon from '@mui/icons-material/Feed';
import EditIcon from '@mui/icons-material/Edit';
import { JSXElementConstructor } from 'react';

interface CrudButtonProps {
  text: string;
  icon: React.FC | null;
  colours: { bg: string; color: string };
  pointer: string;
  onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const CrudButton: React.FC<CrudButtonProps> = ({
  text,
  icon,
  colours,
  pointer,
  onClick,
}) => {
  // colours = {
  //   bg: 'blue',
  //   color:'white'
  // }
  return (
    <div>
      <Stack direction='row' spacing='1rem'>
        <Button

          onClick={onClick}
          sx={{
            textTransform: 'capitalize',
            width: '62px',
            height: '24px',
            borderRadius: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '.3rem',
            pointerEvents:pointer,
            border: '1px solid #BDBDBD',
            color: colours?.color || '#828282',
            backgroundColor: colours?.bg || '',
            '&:hover': {
              backgroundColor: colours?.bg,
              filter: 'contrast(300%)',
            },
          }}>
          {/* <EditIcon sx={{ fontSize: '10px' }} /> */}
          {<div> {icon}</div> || null}

          <Typography sx={{ fontSize: '10px' }}>{text}</Typography>
        </Button>
      </Stack>
    </div>
  );
};

export default CrudButton;
