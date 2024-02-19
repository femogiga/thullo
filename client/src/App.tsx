
import { TextField } from '@mui/material';
import Header from './components/header/Header'
import MiniCard from './components/minicard/MiniCard';
import PresentMembers from './components/presentmember/PresentMembers';
import TaskCard from './components/taskcard/TaskCard';

function App() {

  return (
    <div className='container'>
      <Header />
      <PresentMembers />
      <TaskCard />
     
    </div>
  );
}

export default App
