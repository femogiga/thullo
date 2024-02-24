import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ColorSelectCard = ({ bgColor }) => {
  return (
    <Link to=''>
      <Box
        sx={{
          width: '50px',
          height: '27.08px',
          backgroundColor: bgColor,
          //   border: 'none',
          //   outline: 'none',
          borderRadius: '4px',
        }}></Box>
    </Link>
  );
};

export default ColorSelectCard;
