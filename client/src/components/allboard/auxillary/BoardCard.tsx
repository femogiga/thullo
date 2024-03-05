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

const BoardCard = ({ name, thumbnail, boardId ,userPhotos}) => {
 // const { isPending, data:userPhotos } = useAllBoardPageDataById(boardId)
  console.log(userPhotos)
  return (
    <div className='board-card'>
      <Card
        sx={{
          maxWidth: 243,
          height: 243,
          boxShadow: '0 4 12 0 rgba(0 0 0.05)',
          borderRadius: '12px',
        }}
        draggable>
        <CardContent>
          <CardMedia
            sx={{ width: 219, height: 130, marginBlockEnd: '1rem',borderRadius:'12px' }}
            image={thumbnail || 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'}
            title='board thumbnail'
          />
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '16px',
              marginBlockEnd: '.6rem',
            }}>
            {name ||'Devchallenges'}
          </Typography>
          <Box sx={{ display: 'flex' }}>
            <AvatarGroup
              variant='rounded'
              total={7}
              max={4}
              sx={{
                '& .MuiAvatar-root': {
                  width: 28,
                  height: 28,
                  fontSize: 15,
                },
              }}>
              {
               userPhotos && userPhotos.map((photo,index) =>(<Avatar key={`userphoto_${index}`}
                  sx={{
                    marginInlineEnd: '.5rem',
                    borderRadius: '8px',
                    width: 28,
                    height: 28,
                  }}
                  alt='Remy Sharp'
                  src={photo}
                />))
              }
              {/* <Avatar
                sx={{
                  marginInlineEnd: '.5rem',
                  width: 28,
                  height: 28,
                }}
                alt='Remy Sharp'
                src='/static/images/avatar/1.jpg'
              />
              <Avatar
                sx={{
                  marginInlineEnd: '.5rem',
                  borderRadius: '8px',
                  width: 28,
                  height: 28,
                }}
                alt='Remy Sharp'
                src='/static/images/avatar/1.jpg'
              /> */}
            </AvatarGroup>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
};

export default BoardCard;
