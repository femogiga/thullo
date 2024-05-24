import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';

interface IMiniCard{
  src: string;
  width: number;
  height: number;
}
const MiniCard: React.FC<IMiniCard> = ({ src, width, height }) => {
  return (
    <div className='avatar'>
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
        sx={{
          borderRadius: '4px',
          width: width,
          height: height,
          aspectRatio: 1,
          objectFit: 'cover',
        }}
      />
    </div>
  );
};

export default MiniCard;
