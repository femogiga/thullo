import React, { useEffect, useState } from 'react';
import TaskCard from '../taskcard/TaskCard';
import AddCardButton from '../auxillary/AddCardButton';
import { useTaskDataByPanelId } from '../../api/taskData';
import { useAllPanelDatatwo } from '../../api/panelData';
import PanelName from './PanelName';
import { useCardData } from '../../api/mainBoardPageData';

const TaskPanel = ({ panelId, task, title, onClick }) => {
  const [visibleState, setVisibleState] = useState(false);
  // const handleDeleteRenameVisibility = () => {
  //   setVisibleState(!visibleState);
  // };
  // const { taskByPanelIdData } = useTaskDataByPanelId(panelId);

  //console.log(cardData)
  const style = {
    // border: '1px solid black',
    width: 'min-content',
    height: 'auto',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    rowGap: '1rem',
  };
  return (
    <div style={style}>
      {/* {children} */}
      <PanelName id={panelId} listName={title} icon={'🛷'} onClick={onClick} />
      {task &&
        task.filter(item=>item.panelId === panelId).map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task?.description}
            imageUrl={task.imageUrl}
            labels={task.labels}
            users={task.users}
          />
        ))}
      <AddCardButton />
    </div>
  );
};

export default TaskPanel;
