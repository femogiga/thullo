import MiniCard from '../minicard/MiniCard';
import RoomSecrecy from '../auxillary/RoomSecrecy';
import AddButton from '../auxillary/AddButton';
import ShowMenu from '../auxillary/ShowMenu';
import { AvatarGroup } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useGetAdmin, useGetBoardUsers } from '../../api/userData';
import { useEffect, useState } from 'react';
import { useBoardsOnUsersByboardId } from '../../api/boardsOnUsers';
import InviteCard from '../actionscard/InviteCard';


interface IPresentMembers{
  pointer:string
}
const PresentMembers: React.FC<IPresentMembers> = ({ pointer }) => {
  const params = useParams();
  const [showInviteForm, setShowInviteForm] = useState<boolean>(false);

  const handleInviteVisible = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowInviteForm(!showInviteForm);
  };

  useEffect(() => {}, [params]);
  // const { boardUsersData } = useGetBoardUsers(params.id);
  const { adminUserData } = useGetAdmin(params.id);
  const { boardsOnUsersData } = useBoardsOnUsersByboardId(params.id);

  return (
    <article
      className='flex space-between align-item-center flow-2'
      style={{ paddingBlock: '0.9rem' }}>
      <div className='flex align-item-center col-gap-1'>
        <RoomSecrecy pointer={pointer} />
        <AvatarGroup max={4}>
          <MiniCard
            height={32}
            width={32}
            src={adminUserData && adminUserData[0]?.imgUrl}
          />

          {boardsOnUsersData &&
            boardsOnUsersData.map((user) => (
              <MiniCard
                height={32}
                width={32}
                src={user?.imgUrl}
                key={`useravatar-${user.id}`}
              />
            ))}
          {/* <MiniCard height={32} width={32} src={''} />
          <MiniCard height={32} width={32} src={''} /> */}
        </AvatarGroup>
        {/* <IconButton sx={{ borderRadius: '8px', backgroundColor: '#2F80ED' }}>
        <Plus size={32} style={{ color: 'white' }} />
      </IconButton> */}

        <AddButton
          width={32}
          height={32}
          onClick={handleInviteVisible}
          pointer={pointer}
        />
        {showInviteForm && (
          <div>
            <InviteCard setShowInviteForm={setShowInviteForm} />
          </div>
        )}
      </div>
      <ShowMenu />
    </article>
  );
};

export default PresentMembers;
