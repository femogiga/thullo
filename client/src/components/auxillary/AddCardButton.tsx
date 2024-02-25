import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddCardButton = ({ buttonText }) => {
  /**
   ** Button with deault text whose text can be changed
  * @param {buttonText}
   *
   *
   */
  return (
    <div>
      <Button
        sx={{
          width: '100%',
          maxWidth: '244px',
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
          {buttonText || 'Add another card'}
        </Typography>
      </Button>
    </div>
  );
};

export default AddCardButton;
