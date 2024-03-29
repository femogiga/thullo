import MiniCard from '../minicard/MiniCard';
import RoomSecrecy from '../auxillary/RoomSecrecy';
import AddButton from '../auxillary/AddButton';
import ShowMenu from '../auxillary/ShowMenu';
import { AvatarGroup } from '@mui/material';

const PresentMembers = () => {
  return (
    <article className='flex space-between align-item-center flow-2'>
      <div className='flex align-item-center col-gap-1'>
        <RoomSecrecy />
        <AvatarGroup max={4}>
          <MiniCard height={32} width={32} src={''} />
          <MiniCard height={32} width={32} src={''} />
          <MiniCard height={32} width={32} src={''} />
          <MiniCard height={32} width={32} src={''} />
        </AvatarGroup>
        {/* <IconButton sx={{ borderRadius: '8px', backgroundColor: '#2F80ED' }}>
        <Plus size={32} style={{ color: 'white' }} />
      </IconButton> */}

        <AddButton width={32} height={32} />
      </div>
      <ShowMenu />
    </article>
  );
};

export default PresentMembers;
