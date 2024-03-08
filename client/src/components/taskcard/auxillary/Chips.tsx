import { Chip } from '@mui/material';
import { chipColor } from './../../../utility/chipColor';

const Chips = ({ label,labelColor }) => {
  return (
    <div>
      <Chip
        label={label || 'Clickable'}
        sx={{
          fontSize: '10px',
          fontWeight: '600',
          backgroundColor: labelColor || '#D5E6FB',
          color: "" || '#2F80ED',
          height: '18px',
        }}
      />
    </div>
  );
};

export default Chips;
