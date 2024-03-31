import { Chip } from '@mui/material';
import { chipColor } from './../../../utility/chipColor';

const Chips = ({ label, labelColor,chip }) => {
  //let chip = chipColor(labelColor)
  //console.log('chip',chip)
  return (
    <div>
      <Chip
        label={label || 'Clickable'}
        sx={{
          fontSize: '10px',
          fontWeight: '600',
          backgroundColor: chip?.bgColor  || '#D5E6FB',
          color: chip?.color|| '#2F80ED',
          height: '18px',
        }}
      />
    </div>
  );
};

export default Chips;
