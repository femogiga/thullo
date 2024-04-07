import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import IconLabel from './IconLabel';
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBoardUpdateMutation } from '../../api/boardData';
import { useGetAdmin } from './../../api/userData';

const Visibility: React.FC = () => {
  const { mutateAsync } = useBoardUpdateMutation();
  const params = useParams()

  const { adminUserData } = useGetAdmin(params.id);
  const handleBoardPrivacy = (e , privacy) => {
    const data = { id: params.id, adminId:adminUserData[0].id ,privacy:privacy };
    const res = mutateAsync( data)
  }
  return (
    <Box
      className='visibility-modal'
      sx={{
        boxShadow: '0 2px 4px 1px rgba(0,0,0,.1)',
        padding: '0.5rem',
        width: '234px',
        maxHeight: '199px',
        borderRadius: '12px',
        backgroundColor: 'rgba(255,255,255)',
      }}>
      <div style={{ marginBlockEnd: '1rem' }}>
        <Typography variant='h6' sx={{ fontSize: '13px', fontWeight: '600' }}>
          Visibility
        </Typography>
        <Typography sx={{ fontSize: '12px' }}>
          Choose who can see this board
        </Typography>
      </div>
      <Stack direction='column' spacing={2}>
        <motion.div
          style={{ padding: '.5rem' }}
          whileHover={{ backgroundColor: '#F2F2F2', borderRadius: '8px' }}>
          <Link to='' onClick={(e) => handleBoardPrivacy(e, 'PUBLIC')}>
            <IconLabel
              labelText={'Public'}
              icon={<PublicIcon sx={{ fontSize: '13px' }} />}
            />
            <Typography sx={{ fontSize: '10px' }}>
              Anyone on the internet can see this
            </Typography>
          </Link>
        </motion.div>
        <motion.div
          style={{ padding: '.5rem' }}
          whileHover={{ backgroundColor: '#F2F2F2', borderRadius: '8px' }}>
          <Link
            to=''
            onClick={(e) => handleBoardPrivacy(e, 'PRIVATE')}
            style={{}}>
            <IconLabel
              labelText={'Private'}
              icon={<LockIcon sx={{ fontSize: '13px' }} />}
            />
            <Typography sx={{ fontSize: '10px' }}>
              Only board members can see this
            </Typography>
          </Link>
        </motion.div>
      </Stack>
    </Box>
  );
};

export default Visibility;
