import React, { useEffect, useState } from 'react';
import TaskCard from '../taskcard/TaskCard';
import AddCardButton from '../auxillary/AddCardButton';
import PanelName from './PanelName';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setCardInfoVisible,
  setPanelId,
  setTaskId,
} from '../../features/PageInformationSlice';
import AddCardInput from '../auxillary/CreateTaskForm';
import CreateTaskForm from '../auxillary/CreateTaskForm';
import { setCreateTaskFormVisible } from '../../features/visibilitySlice';
import DeleteRename from '../auxillary/DeleteRename';

interface IPanel {
  panelId: number;
  task;
  title: string;
  onClick: (e: MouseEvent) => void;
  panel;
  index: number;
  visibleState: boolean;
}

const TaskPanel: React.FC<IPanel> = ({
  panelId,
  task,
  title,
  onClick,
  panel,
  index,
  visibleState,
  isPanelVisible,
}) => {
  const [createFormVisibleState, setCreateFormVisibleState] = useState(false);

  const dispatch = useDispatch();
  console.log('status=====>', panel);
  const handleCardClick = (e: MouseEvent, taskId: number, panelId: number) => {
    e.preventDefault();
    dispatch(setTaskId(taskId));
    dispatch(setPanelId(panelId));
    dispatch(setCardInfoVisible(true));
  };

  const handleCreateTaskFormVisibility = () => {
    // dispatch(setCreateTaskFormVisible(!createTaskFormVisible));
    setCreateFormVisibleState(!createFormVisibleState);
  };

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
      <PanelName
        id={panelId}
        listName={title}
        icon={null}
        onClick={onClick}
        //visibleState={visibleState}
      />

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
                    onClick={(e) => handleCardClick(e, task?.id, panelId)}
                  />
                </div>
              )}
            </Draggable>
          ))}
      {createFormVisibleState && (
        <CreateTaskForm
          panelId={panelId}
          panel={panel}
          showForm={handleCreateTaskFormVisibility}
        />
      )}
      <AddCardButton buttonText={''} onClick={handleCreateTaskFormVisibility} />
      {isPanelVisible && (
        <div
          style={{
            position: 'absolute',
            top: '3rem',
            right: '-6rem',
            zIndex: '6',
          }}>
          <DeleteRename />
        </div>
      )}
    </div>
  );
};

export default TaskPanel;
