import {
  Box,
  Card,
  CardContent,
  FormControl,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MemberSelect from './auxillary/MemberSelect';
import CrudButton from '../auxillary/CrudButton';
import MiniCard from '../minicard/MiniCard';
//import {testtData} from '../../tests/testData'
import { photo } from './../../tests/testData';
import { usePexelSearchData } from '../../api/pexelData';
import { Link } from 'react-router-dom';

export const CoverCard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('PC');

  const { coverPhotoData } = usePexelSearchData(searchTerm || 'PC');
  console.log(coverPhotoData);
  useEffect(() => {}, [searchTerm, coverPhotoData]);
  console.log(searchTerm);
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  //console.log(searchTerm)
  const handleSearch = (e) => {
    e.preventDefault();
  }; //////
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
            Photo Search
          </Typography>
          <Typography
            sx={{
              fontSize: '12px',
              marginBlockEnd: '.5rem',
              color: '#828282',
            }}>
            Search Pexel for photos
          </Typography>

          <Box sx={{ marginBlockEnd: 'rem', position: 'relative' }}>
            <TextField
              value={searchTerm}
              onChange={handleSearchInputChange}
              className='user-input'
              rows={1}
              placeholder='Keywords...'
            />
            <IconButton
              onClick={handleSearch}
              sx={{
                borderRadius: '8px',
                backgroundColor: '#2F80ED',
                color: 'white',
                position: 'absolute',
                right: '.2rem',
                top: '.2rem',
              }}>
              <SearchIcon sx={{ fontSize: '.9rem' }} />
            </IconButton>
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
            justifyContent={'space-between'}>
            {coverPhotoData &&
              coverPhotoData.photos.map((photo) => (
                <Link to={''}>
                  <MiniCard
                    src={photo?.src?.small}
                    width={'50px'}
                    height={'50px'}
                  />
                </Link>
              ))}
            {/* <MiniCard src={photo?.one} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.two} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.three} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.four} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.five} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.six} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.seven} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.eight} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.nine} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.ten} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.eleven} width={'50px'} height={'50px'} />
            <MiniCard src={photo?.twelve} width={'50px'} height={'50px'} /> */}
          </Stack>
        </Paper>
      </CardContent>
    </Card>
  );
};
