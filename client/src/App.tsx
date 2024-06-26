import Header from './components/header/Header';
import PresentMembers from './components/presentmember/PresentMembers';
import TaskCard from './components/taskcard/TaskCard';
import TaskPanel from './components/taskpanel/TaskPanel';
import PanelName from './components/taskpanel/PanelName';
import Board from './components/board/Board';
import AddListAndCardButton from './components/auxillary/AddListButton';
import AddCardButton from './components/auxillary/AddCardButton';
import BoardInformation from './components/boardInfo/BoardInformation';
import { useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import CardInformation from './components/cardinformation/CardInformation';
import AllBoard from './components/allboard/AllBoard';
import AllBoardPage from './components/pages/allboard/AllBoardPage';
import BoardPage from './components/pages/mainboard/BoardPage';
import BoardPageTwo from './components/pages/mainboard/BoardPageTwo';
import { QuillInput } from './components/auxillary/QuillInput';
import AddCardInput from './components/auxillary/CreateTaskForm';
import Registerpage from './components/pages/authentication/Register';
import Register from './components/pages/authentication/Register';

const App: React.FC = () => {
  return (
    <div className='container'>
      {/* <CardInformation /> */}
      {/* <AllBoard/> */}
      {/* <AllBoardPage/> */}
      {/* <BoardPage /> */}
      {/* <BoardInformation /> */}
      {/* <QuillInput/> */}
      {/* <AddCardInput /> */}


        <Register />
     
    </div>
  );
};

export default App;
