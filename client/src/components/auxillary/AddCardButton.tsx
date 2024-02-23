import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddCardButton = () => {
  return (
    <div>
      <Button
        sx={{
          width: '244px',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#DAE4FD',
        }}
        endIcon={<AddIcon />}>
        <Typography
          sx={{
            textTransform: 'lowercase',
            fontSize: '12px',
            '&::first-letter': {
              textTransform: 'capitalize', 
            },
          }}>
          Add another card
        </Typography>
      </Button>
    </div>
  );
};

export default AddCardButton;
