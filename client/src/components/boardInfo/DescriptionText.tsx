import { Box, Button } from '@mui/material';
import React, { useRef } from 'react'

const DescriptionText: React.FC = ({ description }) => {

  return (
    <Box dangerouslySetInnerHTML={{ __html: description }} sx={{marginBlockEnd:'1rem'}}>
      {/* <p>Simple board to start on a board</p>
      <p className='flow-1'>
        <span style={{ fontWeight: '600' }}>* Backlog </span>:Lorem ipsum dolor
        sit amet consectetur, adipisicing elit. Illo, molestias delectus. Eum
        nobis
      </p>
      <p>There are 4 list here</p>
      <p className='flow-1'>
        <span style={{ fontWeight: '600' }}>* In Progress </span>: Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Officia maiores doloribus
        nemo velit consequatur perspiciatis ratione nostrum iste saepe ipsam
        culpa earum explicabo, eveniet voluptatum aperiam molestias veritatis
        nam amet.
      </p>
      <p className='flow-1'>
        <span style={{ fontWeight: '600' }}>* In Review </span>:Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Officia maiores doloribus
        nemo velit consequatur perspiciatis ratione nostrum iste saepe ipsam
        culpa earum explicabo, eveniet voluptatum aperiam molestias veritatis
        nam amet.
      </p>
      <p className='flow-1'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia maiores
        doloribus nemo velit consequatur perspiciatis
      </p> */}

    </Box>
  );
}

export default DescriptionText
