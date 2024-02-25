import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
const AddListButton = () => {
  /**
   ** this button is for  adding List only
   *
   *
   *
   */
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
              textTransform: 'capitalize', // Convert the first letter to uppercase
            },
          }}>
          Add another List
        </Typography>
      </Button>
    </div>
  );
};

export default AddListButton;
