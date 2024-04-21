import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
  AvatarGroup,
  Box,
  Stack,
} from '@mui/material';
import { useGetAdmin } from '../../../api/userData';
import { useBoardsOnUsersByboardId } from './../../../api/boardsOnUsers';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { AnimatePresence, motion } from 'framer-motion';

const BoardCard = ({
  admin,
  name,
  thumbnail,
  boardId,
  userPhotos,
  adminId,
  privacy,
  userAuth,
  onClick,
}) => {
  //  const { isPending, data:adminUser } = useAllBoardPageDataById(boardId)
  //console.log(admin);
  //console.log(admin); //
  const activeUser = useSelector((state) => state.auth.user);
  const { isAdminPending, adminUserData } = useGetAdmin(boardId);
  //console.log('adminUserData', adminUserData);
  const [locked, setLocked] = useState('locked');
  const { boardsOnUsersData } = useBoardsOnUsersByboardId(boardId);
  //const { boardByIdData } = useBoardDataId(boardId);
  //console.log(boardsOnUsersData);
  const userPresent = userPhotos?.filter(
    async (user) => user?.id === activeUser?.id || user?.id === admin?.id
  );
  // console.log('userpresent', userPresent);
  // console.log('userPhotos', userPhotos);
  // //console.log(adminUserData)
  // console.log(adminId);

  // console.log(userAuth);
  useEffect(() => {
    //  if (
    //   parseInt(admin.id) !== parseInt(activeUser?.id) &&
    //   privacy === 'PRIVATE'
    // ) {
    //   setLocked('locked');
    // }
    // else if (
    //   privacy === 'PRIVATE' &&
    //   (userPresent && Object.keys(userPresent).length > 0)
    //   //userPresent.length > 0 &&
    //    //userPresent[0]?.id !== activeUser?.id
    // ) {
    //   setLocked('unlocked');
    // }
    //  else {
    //   setLocked('unlocked');
    // }

    {
      if (
        (userAuth && Object.keys(userAuth).length > 0) ||
        adminId === activeUser?.id
      )
        setLocked('unlocked');
      else {
        setLocked('locked');
      }
    }
  }, [locked, privacy, userPresent, activeUser?.id, admin, userAuth, adminId]);

  return (
    <AnimatePresence>
      <motion.div
        whileTap={{ scale: locked === 'locked' ? 1 : 0.9 }}
        animate={{ rotate: [0, -4, 4, -4, 0] }}
        transition={{ duration: 0.5 }}
        style={
          {
            // position: 'absolute',
            //right: '2rem',
            // top: '4rem',
            // zIndex: '4',
          }
        }>
        <div className='board-card'>
          <Link
            onClick={onClick}
            style={{ pointerEvents: locked === 'locked' ? 'none' : 'auto' }}>
            <Card
              sx={{
                maxWidth: 243,
                height: 243,
                boxShadow: '0 0 5px rgba(0,0 ,0,0.1)',
                borderRadius: '12px',
                pointer: 'none',
                '&:hover': {
                  filter: 'contrast(95%)',
                  transform: 'scale(1.002)',
                },
              }}
              draggable>
              <CardContent>
                <CardMedia
                  sx={{
                    width: 219,
                    height: 130,
                    marginBlockEnd: '1rem',
                    borderRadius: '12px',
                  }}
                  image={
                    thumbnail ||
                    'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'
                  }
                  title='board thumbnail'
                />
                {/* <p>
            {(userAuth && Object.keys(userAuth).length > 0) ||
            adminId === activeUser?.id
              ? 'unlocked'
              : 'locked'}
          </p> */}
                {/* <p>{locked}</p> */}
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Typography
                    sx={{
                      fontWeight: '500',
                      fontSize: '16px',
                      marginBlockEnd: '.6rem',
                    }}>
                    {name || 'Devchallenges'}
                  </Typography>
                  {locked === 'locked' ? (
                    <LockOutlinedIcon sx={{ color: '#2F80ED' }} />
                  ) : (
                    <LockOpenIcon sx={{ color: '#6FCF97' }} />
                  )}
                </Stack>
                <Box sx={{ display: 'flex' }}>
                  <AvatarGroup
                    variant='rounded'
                    total={userPhotos?.length + 1}
                    max={5}
                    sx={{
                      '& .MuiAvatar-root': {
                        width: 28,
                        height: 28,
                        fontSize: 15,
                      },
                    }}>
                    <Avatar
                      key={`adminphoto_${admin?.id}`}
                      sx={{
                        marginInlineEnd: '.5rem',
                        borderRadius: '8px',
                        width: 28,
                        height: 28,
                      }}
                      alt='person photo'
                      src={admin?.imgUrl}
                    />
                    {userPhotos &&
                      userPhotos.map((user, index) => (
                        <Avatar
                          key={`userphoto_${user?.id}`}
                          sx={{
                            marginInlineEnd: '.5rem',
                            borderRadius: '8px',
                            width: 28,
                            height: 28,
                          }}
                          alt='User photos'
                          src={user?.imgUrl}
                        />
                      ))}
                  </AvatarGroup>
                </Box>
              </CardContent>
            </Card>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BoardCard;
