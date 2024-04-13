import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Typography,
  AvatarGroup,
  Box,
} from '@mui/material';
import { useAllBoardPageDataById } from '../../../api/allBoardPageData';
import { useGetAdmin } from '../../../api/userData';

const BoardCard = ({
  admin,
  name,
  thumbnail,
  boardId,
  userPhotos,
  adminId,
}) => {
  //  const { isPending, data:adminUser } = useAllBoardPageDataById(boardId)
  //console.log(admin);
  //console.log(admin); //

  return (
    <div className='board-card'>
      <Card
        sx={{
          maxWidth: 243,
          height: 243,
          boxShadow: '0 0 5px rgba(0,0 ,0,0.1)',
          borderRadius: '12px',
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
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '16px',
              marginBlockEnd: '.6rem',
            }}>
            {name || 'Devchallenges'}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <AvatarGroup
              variant='rounded'
              total={userPhotos?.length}
              max={4}
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
                alt='Remy Sharp'
                src={admin?.imgUrl}
              />
              {userPhotos &&
                userPhotos.map((photo, index) => (
                  <Avatar
                    key={`userphoto_${index}`}
                    sx={{
                      marginInlineEnd: '.5rem',
                      borderRadius: '8px',
                      width: 28,
                      height: 28,
                    }}
                    alt='User photos'
                    src={photo}
                  />
                ))}
            </AvatarGroup>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardCard;
