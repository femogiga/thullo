import { LockKey } from '@phosphor-icons/react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import useUIHooks from '../pages/allboard/hooks/useUIHooks';
import { useBoardDataId } from '../../api/boardData';

interface IRoomSecrecy {
  pointer:string
}
const RoomSecrecy: React.FC<IRoomSecrecy> = ({ pointer }) => {
  const params = useParams();
  //const { data } = useAllBoardPageDataById(params?.id)
  const { boardByIdData } = useBoardDataId(params?.id);
  //console.log('secret', boardByIdData);
  const { handleBoardVisibility } = useUIHooks();
  const paraStyle = {
    width: '7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1rem',
    paddingBlock: '.4rem',
    borderRadius: '.438rem',
    pointerEvents: pointer,
    // border:'1px solid black'
  };
  return (
    <Link to='' onClick={handleBoardVisibility}>
      <motion.div style={paraStyle} whileHover={{ backgroundColor: '#F2F2F2' }}>
        <LockKey size={20} />
        <span style={{ textTransform: 'capitalize' }}>
          {(boardByIdData && boardByIdData[0]?.privacy) === 'PUBLIC'
            ? 'Public'
            : 'Private'}
        </span>
      </motion.div>
    </Link>
  );
};

export default RoomSecrecy;
