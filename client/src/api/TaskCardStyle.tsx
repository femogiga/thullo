import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import BackHandIcon from '@mui/icons-material/BackHand';

const TaskCardStyle = ({ imgUrl, headingText }) => {
  return (
    <div>
      <Card
        sx={{
          maxWidth: 243,
          height: 290,
          // boxShadow: '0 0 5px rgba(0, 0, 0,.2)',
          borderRadius: '12px',
          transformStyle: 'preserve-3d',
          boxShadow:
            '1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01), 28px 28px 28px 0 rgba(34, 33, 81, 0.25)',
        }}>
        <CardContent>
          <CardMedia
            sx={{
              width: 219,
              height: 130,
              marginBlockEnd: '1rem',
              borderRadius: '12px',
            }}
            image={
              imgUrl ||
              'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'
            }
            title='green iguana'
          />
          <Typography
            gutterBottom
            component='div'
            sx={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
            <BackHandIcon sx={{ fontSize: '1rem', fill: '#5C4033' }} />
            {headingText ||'Move anything ready here'}
          </Typography>
          <Stack direction='row' spacing={1} sx={{ marginBlockEnd: '1.2rem' }}>
            {/* <Chips taskType={'Design'} /> */}
            {/* {labels &&
              labels.map((label) => (
                <Chips
                  key={`label${label?.id}`}
                  label={label?.label}
                  labelColor={label?.labelColor}
                  chip={chipColor(label?.labelColor)}
                />
              ))} */}
          </Stack>
          <Stack
            direction='row'
            spacing={1}
            justifyContent='space-between'
            alignItems='centre'>
            <Stack direction='row' spacing={1} alignItems={'center'}>
              {/* <MiniCard height={28} width={28} src='' />
              {users.map((user) => (
                <MiniCard height={28} width={28} src={user?.imgUrl} />
              ))} */}
              {/* <AddButton
                  width={28}
                  height={28}
                  onClick={handleAddUserButton}
                /> */}
            </Stack>
            {/* <Stack direction='row' spacing={1} alignItems={'center'}>
              <IconButton>
                <CommentIcon sx={{ width: '12px', marginRight: '.5rem' }} />
                <Typography sx={{ fontSize: '10px' }}>{chatCount}</Typography>
              </IconButton>
              <IconButton>
                <AttachFileIcon sx={{ width: '12px', marginRight: '.5rem' }} />
                <Typography sx={{ fontSize: '10px' }}>{assetCount}</Typography>
              </IconButton>
            </Stack> */}
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskCardStyle;
