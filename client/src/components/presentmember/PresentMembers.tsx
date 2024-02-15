import MiniCard from '../minicard/MiniCard';
import RoomSecrecy from '../auxillary/RoomSecrecy';
import IconButton from '@mui/material/IconButton';
import { Plus } from '@phosphor-icons/react';
import AddButton from '../auxillary/AddButton';

const PresentMembers = () => {
  return (
    <div className='flex align-item-center col-gap-1'>
      <RoomSecrecy />
      <MiniCard
        src={
          'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
      />
      <MiniCard src={''} />
      <MiniCard src={''} />
      <MiniCard src={''} />
      {/* <IconButton sx={{ borderRadius: '8px', backgroundColor: '#2F80ED' }}>
        <Plus size={32} style={{ color: 'white' }} />
      </IconButton> */}
      <AddButton />
    </div>
  );
};

export default PresentMembers;
