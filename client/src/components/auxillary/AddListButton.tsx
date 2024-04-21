import { Button, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { setAddPanelModalOpen } from '../../features/visibilitySlice';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const AddListButton: React.FC = () => {
  /**
   ** this button is for  adding List only
   *
   *
   *
   */

  const dispatch = useDispatch()
 const addPanelModalOpen = useSelector(
      (state:RootState) => state.visibility.addPanelModalOpen
    );
  const handleCreatePanelModalVisibility = () => {
    dispatch(setAddPanelModalOpen(!addPanelModalOpen));
  }
  return (
    <div>
      <Button
        onClick={handleCreatePanelModalVisibility}
        sx={{
          width: '244px',
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#DAE4FD',
          marginBlockEnd: '.4rem',
        }}
        endIcon={<AddIcon />}>
        <Typography
          sx={{
            textTransform: 'lowercase',
            fontSize: '12px',
            '&::first-letter': {
              textTransform: 'capitalize', // Convert the first letter to uppercase
            },
          }}>
          Add another List
        </Typography>
      </Button>
    </div>
  );
};

export default AddListButton;
