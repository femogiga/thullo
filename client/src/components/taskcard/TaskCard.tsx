import {
  Box,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import Chips from './auxillary/Chips';
import MiniCard from '../minicard/MiniCard';
import AddButton from '../auxillary/AddButton';
import CommentIcon from '@mui/icons-material/Comment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BackHandIcon from '@mui/icons-material/BackHand';
import InviteCard from '../actionscard/InviteCard';
import { useEffect, useState } from 'react';
import LabelCard from './../actionscard/LabelCard';
import { chipColor } from './../../utility/chipColor';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ITaskCard {
  title: string;
  description: string;
  imageUrl: string;
  assetCount: number;
  chatCount: number;
  labels: string[];
  users: string[];
  onClick: () => void;
}
const TaskCard: React.FC<ITaskCard> = ({
  title,
  description,
  imageUrl,
  labels,
  users,
  onClick,
  assetCount,
  chatCount,
}) => {
  // const { handleAddUserButton, show, setShow } = useUserHook;
  const [show, setShow] = useState(false);
  useEffect(() => {}, [show]);

  const handleAddUserButton = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    e.preventDefault();
    //dispatch()
    setShow(!show);
  };
  return (
    <Link onClick={onClick}>
      <motion.div
        whileTap={{ scale: 0.9 }}
        animate={{
          rotate: [0, -2, 2, -2, 0],
          transition: { duration: 0.5 },
        }}>
        <div>
          <Card
            sx={{
              maxWidth: 243,
              height: 290,
              boxShadow: '0 0 5px rgba(0, 0, 0,.2)',
              borderRadius: '12px',
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
                  imageUrl ||
                  'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=600'
                }
                title='green iguana'
              />
              <Typography
                gutterBottom
                component='div'
                sx={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                <BackHandIcon sx={{ fontSize: '1rem', fill: '#5C4033' }} />
                {title || 'Move anything ready here'}
              </Typography>
              <Stack
                direction='row'
                spacing={1}
                sx={{ marginBlockEnd: '1.2rem' }}>
                {/* <Chips taskType={'Design'} /> */}
                {labels &&
                  labels.map((label) => (
                    <Chips
                      key={`label${label?.id}`}
                      label={label?.label}
                      labelColor={label?.labelColor}
                      chip={chipColor(label?.labelColor)}
                    />
                  ))}
              </Stack>
              <Stack
                direction='row'
                spacing={1}
                justifyContent='space-between'
                alignItems='centre'>
                <Stack direction='row' spacing={1} alignItems={'center'}>
                  {/* <MiniCard height={28} width={28} src='' /> */}
                  {users.map((user) => (
                    <MiniCard height={28} width={28} src={user?.imgUrl} />
                  ))}
                  {/* <AddButton
                  width={28}
                  height={28}
                  onClick={handleAddUserButton}
                /> */}
                </Stack>
                <Stack direction='row' spacing={1} alignItems={'center'}>
                  <IconButton>
                    <CommentIcon sx={{ width: '12px', marginRight: '.5rem' }} />
                    <Typography sx={{ fontSize: '10px' }}>
                      {chatCount}
                    </Typography>
                  </IconButton>
                  <IconButton>
                    <AttachFileIcon
                      sx={{ width: '12px', marginRight: '.5rem' }}
                    />
                    <Typography sx={{ fontSize: '10px' }}>
                      {assetCount}
                    </Typography>
                  </IconButton>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
          {show && (
            <Box sx={{ position: 'absolute', top: '9rem', zIndex: '6' }}>
              <InviteCard />
            </Box>
          )}
        </div>
      </motion.div>
    </Link>
  );
};

export default TaskCard;
