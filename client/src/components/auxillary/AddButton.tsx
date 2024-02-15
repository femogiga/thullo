import IconButton from '@mui/material/IconButton';
import { Plus } from '@phosphor-icons/react';
const AddButton = () => {
  return (
    <IconButton sx={{ borderRadius: '8px', backgroundColor: '#2F80ED' }}>
      <Plus size={32} style={{ color: 'white' }} />
    </IconButton>
  );
};

export default AddButton;
