import { Stack } from '@mui/material';
import React from 'react';

export const NameLabel = ({ firstName ,lastName}) => {
  return (
    <div>
      <Stack direction='row' alignItems='center' columnGap='1rem'>
        <div>
          <p style={{ fontSize: '12px', color: 'black', fontWeight: '600' }}>
            {firstName + " " + lastName || 'Daniel Jensen'}
          </p>
        </div>
      </Stack>
    </div>
  );
};
