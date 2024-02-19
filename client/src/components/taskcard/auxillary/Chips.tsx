import { Chip } from '@mui/material';
import { chipColor } from './../../../utility/chipColor';

const Chips = ({ taskType }) => {
  const colorStyle = chipColor(taskType);
  return (
    <div>
      <Chip
        label={taskType || 'Clickable'}
        sx={{
          fontSize: '10px',
          fontWeight: '600',
          backgroundColor: colorStyle.bgColor || '#D5E6FB',
          color: colorStyle.color || '#2F80ED',
          height: '18px',
        }}
      />
    </div>
  );
};

export default Chips;
