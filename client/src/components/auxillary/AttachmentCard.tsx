import { Box, IconButton, Stack, Typography } from '@mui/material';
import IconLabel from './IconLabel';
import CrudButton from './CrudButton';
import handleDownload from '../../utility/fileDownload';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import {
  dateFormatter,
  dateFormatterAttachment,
} from './../../utility/timeFormatter';
import { useDeleteAssetMutation } from '../../api/assetData';
import { useState } from 'react';

interface AttachmentProps {
  assetId: number;
  src: string;
  title: string;
  createdAt: string;
}
const AttachmentCard: React.FC<AttachmentProps> = ({
  assetId,
  src,
  title,
  createdAt,
}) => {
  const pics =
    'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600';

  const { deleteAssetMutation } = useDeleteAssetMutation();
  const [showButton, setShowButton] = useState(false);

  const handleShowButtonOnDelete = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowButton(true);
  };

  const handleHideButtonOnDeleteCancel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setShowButton(false);
  };
  const handleAssetDelete = async (e) => {
    e.preventDefault();
    const data = { id: assetId };
    await deleteAssetMutation(data);
  };
  return (
    <Box marginBlockEnd={'1rem'}>
      <Stack direction='row' spacing='1rem'>
        <div style={{ maxWidth: '5rem', borderRadius: '8px' }}>
          <img src={pics} alt='' style={{ borderRadius: '8px' }} />
        </div>
        <div style={{ marginBlockEnd: '5px' }}>
          <IconLabel
            icon={null}
            labelText={
              dateFormatterAttachment(createdAt) || '...Added July 5,2020'
            }
          />
          <Typography
            sx={{ fontSize: '10px', fontWeight: '500', marginBlockEnd: '5px' }}>
            {title || 'Reasoning by Ragnanath Krishma'}
          </Typography>
          <Stack
            direction='row'
            spacing='9px'
            color='#828282'
            alignItems={'center'}>
            {/* <div className='downloadLink'>
              <Link href={src} download={title}>
                Download
              </Link>
            </div> */}
            <CrudButton
              onClick={(e) => handleDownload(e, src)}
              colours=''
              icon=''
              text={'Download'}
            />
            <CrudButton
              onClick={handleShowButtonOnDelete}
              colours=''
              icon=''
              text={'Delete'}
            />
            {showButton && (
              <Stack direction='row'>
                <IconButton
                  onClick={handleAssetDelete}
                  sx={{ display: 'flex', alignItems: 'center' }}>
                  <DoneIcon sx={{ color: 'red' }} />
                </IconButton>
                <IconButton onClick={handleHideButtonOnDeleteCancel}>
                  <CloseIcon sx={{ color: 'green' }} />
                </IconButton>
              </Stack>
            )}
          </Stack>
        </div>
      </Stack>
    </Box>
  );
};

export default AttachmentCard;
