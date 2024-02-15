import { LockKey } from '@phosphor-icons/react';
const RoomSecrecy = () => {
  const paraStyle = {
    width: '7rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '1rem',
    paddingBlock: '.4rem',
    borderRadius: '7px',
    backgroundColor: '#F2F2F2',
  };
  return (
    <p style={paraStyle}>
      <LockKey size={20} />
      <span>Private</span>
    </p>
  );
};

export default RoomSecrecy;
