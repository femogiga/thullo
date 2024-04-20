import { Chip } from '@mui/material';
import { InferableComponentEnhancerWithProps } from 'react-redux';

interface Ichip{
  bgColor: string;
  color:string
}
interface IChips{
  label: string;
  labelColor: string;
  chip:Ichip
}
const Chips:React.FC<IChips> = ({ label, labelColor,chip }) => {
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
