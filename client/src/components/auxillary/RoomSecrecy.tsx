import { LockKey } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import useUIHooks from '../pages/allboard/hooks/useUIHooks';
const RoomSecrecy = () => {
  const { handleBoardVisibility } = useUIHooks();
  const paraStyle = {
    width: '7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1rem',
    paddingBlock: '.4rem',
    borderRadius: '7px',

  };
  return (
    <Link to='' onClick={handleBoardVisibility}>
      <motion.div style={paraStyle} whileHover={{ backgroundColor: '#F2F2F2' }}>
        <LockKey size={20} />
        <span>Private</span>
      </motion.div>
    </Link>
  );
};

export default RoomSecrecy;
