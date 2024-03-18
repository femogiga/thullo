import React, { useEffect, useState } from 'react';
import TaskCard from '../taskcard/TaskCard';
import AddCardButton from '../auxillary/AddCardButton';
import PanelName from './PanelName';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setCardInfoVisible, setTaskId } from '../../features/PageInformationSlice';

interface IPanel {
  panelId: number;
  task;
  title:string;
  onClick :(e:MouseEvent)=>void;
  panel;
  index :number;
}

const TaskPanel:React.FC<IPanel> = ({ panelId, task, title, onClick, panel, index }) => {
  const [visibleState, setVisibleState] = useState(false);
  const dispatch = useDispatch()



  const handleCardClick = (e: MouseEvent,taskId:number) => {
    e.preventDefault();
    dispatch(setTaskId(taskId))
    dispatch(setCardInfoVisible(true))
  }

  const style = {
    // border: '1px solid black',

    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    rowGap: '1rem',
    padding: '1rem',
    width: '280px',


    //gap: '1rem',
    //border:'1px solid black'
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
              draggableId={`${'' + task.id}`}
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
                    labels={task?.labels}
                    users={task.users}
                    onClick={(e)=>handleCardClick(e,task?.id)}

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
