import React, { useEffect, useState } from 'react';
import TaskCard from '../taskcard/TaskCard';
import AddCardButton from '../auxillary/AddCardButton';
import PanelName from './PanelName';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const TaskPanel = ({ panelId, task, title, onClick, panel, index }) => {
  const [visibleState, setVisibleState] = useState(false);

  const style = {
    // border: '1px solid black',
    width: 'min-content',
    minHeight: '100vh',
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
        task
          // .filter((item) => item?.panelId === panelId)
          .map((task, taskIndex) => (
            <Draggable
              key={`draggable-${task.id}`}
              draggableId={`draggable-${task.id}`}
              index={taskIndex}
              type='TASK'>
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}>
                  <TaskCard
                    key={`tasckcard-${task.id}`}
                    title={task.title}
                    description={task?.description}
                    imageUrl={task.imageUrl}
                    labels={task.labels}
                    users={task.users}
                  />                 

                </div>
              )}
            </Draggable>
          ))}

      <AddCardButton />
    </div>
  );
};

export default TaskPanel;
