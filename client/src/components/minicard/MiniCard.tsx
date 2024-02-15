import Avatar from '@mui/material/Avatar';
import { LockKey } from '@phosphor-icons/react';
const MiniCard = ({src}) => {

  return (
    <div>
      {/* <p style={paraStyle}>
        <LockKey size={20} />
        <span>Private</span>
      </p> */}
      <Avatar
        alt='Remy Sharp'
        src={
          src ||
          'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
        variant='square'
        sx={{ borderRadius: '4px' }}
      />
    </div>
  );
};

export default MiniCard;
