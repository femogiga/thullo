import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
const AddButton = ({ width, height,onClick }) => {
  /**
   ** Button with Add icon
   *
   *
   */
  return (
    <IconButton
      onClick={onClick}
      sx={{
        borderRadius: '8px',
        backgroundColor: '#2F80ED',
        width: width,
        height: height,
        '&:hover': { backgroundColor: 'blue' },
      }}>
      <AddIcon sx={{ fontSize: 16, color: 'white' }} />
    </IconButton>
  );
};

export default AddButton;
