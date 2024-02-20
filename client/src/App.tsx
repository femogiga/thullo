import Header from './components/header/Header';
import PresentMembers from './components/presentmember/PresentMembers';
import TaskCard from './components/taskcard/TaskCard';
import TaskPanel from './components/taskpanel/TaskPanel';
import PanelName from './components/taskpanel/PanelName';
import Board from './components/board/Board';
import AddListAndCardButton from './components/auxillary/AddListButton';
import AddCardButton from './components/auxillary/AddCardButton';
import BoardInformation from './components/boardInfo/BoardInformation';

function App() {
  return (
    <div className='container'>
      {/* <Header />
      <PresentMembers />
      <Board>
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
      <BoardInformation/>
    </div>
  );
}

export default App;
