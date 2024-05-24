import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
interface IAddButton{
  width: number;
  height: number;
  onClick: () => void;
  pointer:string
}
const AddButton:React.FC<IAddButton> = ({ width, height,onClick,pointer }) => {
  /**
   ** Button with Add icon
   *
   *
   */
  return (
    <IconButton
      onClick={onClick}
      sx={{
        borderRadius: '8px',
        backgroundColor: '#2F80ED',
        width: width,
        height: height,
        pointerEvents: pointer,
        '&:hover': { backgroundColor: 'blue' },
      }}>
      <AddIcon sx={{ fontSize: 16, color: 'white' }} />
    </IconButton>
  );
};

export default AddButton;
