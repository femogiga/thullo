import Header from './components/header/Header';
import PresentMembers from './components/presentmember/PresentMembers';
import TaskCard from './components/taskcard/TaskCard';
import TaskPanel from './components/taskpanel/TaskPanel';
import PanelName from './components/taskpanel/PanelName';
import Board from './components/board/Board';

function App() {
  return (
    <div className='container'>
      <Header />
      <PresentMembers />
      <Board>
        <TaskPanel>
          <PanelName listName={'In Progress'}  icon={'📚'} />
          <TaskCard />
          <TaskCard />
        </TaskPanel>
        <TaskPanel>
          <PanelName  listName={'In Review'} icon={'⚙️'} />
          <TaskCard />
          <TaskCard />
        </TaskPanel>
        <TaskPanel>
          <PanelName  listName={'Completed'} icon={'👌'} />
          <TaskCard />
          <TaskCard />
        </TaskPanel>
      </Board>
    </div>
  );
}

export default App;
