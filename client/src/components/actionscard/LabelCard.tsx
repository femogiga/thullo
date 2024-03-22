import {
  Box,
  Card,
  CardContent,
  FormControl,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';

import LabelIcon from '@mui/icons-material/Label';
//import {testtData} from '../../tests/testData'
import { photo } from './../../tests/testData';
import { Link } from 'react-router-dom';
import ColorSelectCard from './auxillary/ColorSelectCard';
import { colors } from './auxillary/colors';
import IconLabel from '../auxillary/IconLabel';
import Chips from '../taskcard/auxillary/Chips';
import CrudButton from '../auxillary/CrudButton';
const LabelCard = () => {
  /**
   ** LabelCard is used to apply color , labels and classification   in task
   *
   *
   */

  const [label, setLabel] = useState('');
  const [color, setColor] = useState('');

  const handleLabelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabel(e.target.value);
  };

  const handleColorClick = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setColor(e.currentTarget.name);
  };
  const data = { label, color };
  console.log('chipData----->', data);
  useEffect(() => {}, [color]);
  return (
    <Card
      className='cover-card'
      sx={{
        maxWidth: '245.28px',
        width: '15.33rem',
        maxHeight: '315px',
        height: '315px',
        display: 'flex',
        borderRadius: '8px',
        position: 'absolute',
        zIndex: '4',
      }}>
      <CardContent>
        <FormControl sx={{ marginBlockEnd: '.2rem' }}>
          <Typography sx={{ fontSize: '12px', fontWeight: '600' }}>
            Label
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              marginBlockEnd: '.5rem',
              color: '#828282',
            }}>
            Select a name and a color
          </Typography>

          <Box sx={{ marginBlockEnd: 'rem', position: 'relative' }}>
            <TextField
              value={label}
              className='user-input'
              rows={1}
              placeholder='Label...'
              onChange={handleLabelInputChange}
            />
          </Box>
        </FormControl>
        <Paper
          variant='elevation'
          elevation={0}
          sx={{
            paddingBlock: '1.1rem',
            marginBlockEnd: '1rem',
            width: '15.33rem',
          }}>
          <Stack
            direction={'row'}
            gap={0.8}
            flexWrap={'wrap'}
            width='90%'
            marginBlockEnd={'1rem'}
            justifyContent={'space-between'}>
            {/* <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} />
            <ColorSelectCard bgColor={'#219653'} /> */}

            {colors.map((color) => (
              <ColorSelectCard
                key={color.code}
                bgColor={color.code}
                onClick={handleColorClick}
                name={color.code}
              />
            ))}
          </Stack>
          <IconLabel
            labelText={'Available'}
            icon={<LabelIcon sx={{ fontSize: '14px' }} />}
          />
          <Stack direction='row' spacing={1} sx={{ marginBlockEnd: '1rem' }}>
            <Chips label={'Technical'} />
            <Chips label={'Design'} />
            <Chips label={label} chip={{ bgColor: color }} />
          </Stack>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CrudButton
              text={'Add'}
              colours={{ color: 'white', bg: '#2F80ED' }}
              icon={null}
            />
          </Box>
        </Paper>
      </CardContent>
    </Card>
  );
};

export default LabelCard;
