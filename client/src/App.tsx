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

const  App:React.FC = () => {
  const pageInfoVisibility = useSelector(
    (state) => state.pageInformation.visible
  );
  return (
    <div className='container'>
      <Header />
      <PresentMembers />
      {/* <Board>
        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0, translateX: 500 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, translateX: 500 }}
            style={{
              position: 'absolute',
              right: '2rem',
              top: '4rem',
              zIndex: '4',
            }}>
            {pageInfoVisibility && <BoardInformation />}
          </motion.div>
        </AnimatePresence>
        <TaskPanel>
          <PanelName listName={'Backlog'} icon={'🛷'} />
          <TaskCard />
          <AddCardButton />
        </TaskPanel>
        <TaskPanel>
          <PanelName listName={'In Progress'} icon={'📚'} />
          <TaskCard />
          <TaskCard />
          <AddCardButton />
        </TaskPanel>
        <TaskPanel>
          <PanelName listName={'In Review'} icon={'⚙️'} />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <AddCardButton />
        </TaskPanel>
        <TaskPanel>
          <PanelName listName={'Completed'} icon={'👌'} />
          <TaskCard />
          <TaskCard />
          <AddCardButton />
        </TaskPanel>
        <AddListAndCardButton />
      </Board> */}
    <CardInformation/>
    </div>
  );
}

export default App;
