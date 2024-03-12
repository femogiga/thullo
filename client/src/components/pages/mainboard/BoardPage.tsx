import React, { useEffect, useState } from 'react';
import Header from '../../header/Header';
import PresentMembers from '../../presentmember/PresentMembers';
import Board from '../../board/Board';
import { AnimatePresence, motion, cubicBezier } from 'framer-motion';
import { useSelector } from 'react-redux';
import BoardInformation from '../../boardInfo/BoardInformation';
import TaskPanel from '../../taskpanel/TaskPanel';
import PanelName from '../../taskpanel/PanelName';
import AddCardButton from '../../auxillary/AddCardButton';
import TaskCard from '../../taskcard/TaskCard';
import Visibility from '../../auxillary/Visibility';
import { Box } from '@mui/material';
import { useMainPageData } from './hooks/useMainPageData';
import {
  useAllTaskData,
  useTaskCardData,
  useTaskCardMutation,
} from '../../../api/taskData';
import { useCardData } from '../../../api/mainBoardPageData';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import { useParams } from 'react-router-dom';

const BoardPage = () => {
  const { taskCard } = useTaskCardData();
  const [title, setTitle] = useState('');
  //const { id } = useParams();
  const params = useParams();
  const id = params.id;
  const [visibleState, setVisibleState] = useState({
    backlog: false,
    inProgress: false,
    inReview: false,
    completed: false,
  });
  const handleDeleteRenameVisibility = (panel) => {
    setVisibleState((prevState) => ({
      ...prevState,
      [panel]: !prevState[panel],
    }));
  };

  useEffect(() => {}, [params]);

  const pageInfoVisibility = useSelector(
    (state) => state.pageInformation.visible
  );
  const visibleModalState = useSelector((state) => state.visibility.visible);
  // const { id } = useParams();
  // const { boardByIdData } = useBoardDataId(parseInt(id));
  const { boardByIdData, panelByBoardIdData } = useMainPageData();
  console.log(panelByBoardIdData && panelByBoardIdData);
  const { isSuccess, error, mutateAsync } = useTaskCardMutation();

  // const onDragEnd = (result) => {
  //   const { destination, source, draggableId } = result
  //   if (!destination) {
  //     return
  //   }
  //   if (destination.dropabbleId=== source.dropabbleId && destination.index === source.index) {
  //     return;
  //   }

  //   const column = panelByBoardIdData[source.droppableId]
  //   const newTaskIds = Array.from(column.id)
  //   console.log('draggableId', draggableId);
  // };
  // const [data, setPanelByBoardIdData] = useState([panelByBoardIdData]);
  //useEffect(() => {}, [data]);

  // const onDragEnd = (result) => {
  //   const { destination, source, draggableId } = result;

  //   if (
  //     !destination ||
  //     (destination.droppableId === source.droppableId &&
  //       destination.index === source.index)
  //   ) {
  //     return;
  //   }

  //   const column = panelByBoardIdData.find(col => draggableId.contains(col.title))
  // };

  //const [data, setData] = useState(panelByBoardIdData);
  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;
    console.log(result);
    // Check if there is no destination or if the card was dropped in the same position
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    const destTextArray = destination.droppableId.split('-');
    //const title = destTextArray[0];
    setTitle(destTextArray[0]);
    console.log(title);
    //console.log('destArray===>', destArray);
    console.log('boardId===>', id);
    //const destinationId =
    // const idArray = draggableId.split('-');
    //console.log('idArray', idArray);
    // const id = idArray[1];
    console.log(draggableId);
    //const boardId = id;
    const taskId = parseInt(draggableId);

    //
    // if (title && taskId && boardId) {
    const dataToSend = { title: title, boardId: id, taskId: taskId };
    mutateAsync(dataToSend);
    // }
  };
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header boardName={boardByIdData && boardByIdData[0]?.name} />
      <PresentMembers />
      <Board direction={'row'}>
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
        <DragDropContext onDragEnd={onDragEnd}>
          {panelByBoardIdData &&
            panelByBoardIdData.map((panel, index) => {
              //const { cardData } = useCardData(panel?.id);
              //
              return (
                <>
                  <Droppable droppableId={panel?.title}>
                    {(provided, snapshot) => (
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                        <TaskPanel
                          key={`panel-${panel?.id}`}
                          panelId={panel?.id}
                          title={panel?.title}
                          index={index}
                          panel={panel}
                          task={taskCard?.filter(
                            (item) => item?.panelId === panel?.id
                          )}
                          onClick={() =>
                            handleDeleteRenameVisibility('backlog')
                          }
                        />
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </>
              );
            })}
        </DragDropContext>

        {/* {panelByBoardIdData &&
          panelByBoardIdData.map((panel) => {
            return (
              <TaskPanel key={`panel-${panel.id}`} panelId={panel?.id}>
                <PanelName
                  id={panel.id}
                  listName={panel.title}
                  icon={'🛷'}
                  onClick={() => handleDeleteRenameVisibility('backlog')}
                />
                <TaskCard />
                <AddCardButton />
                <Box
                  sx={{
                    position: 'absolute',
                    zIndex: '5',
                    top: '2rem',
                    right: '-7rem',
                  }}>
                  {visibleState.backlog && <DeleteRename />}
                </Box>
              </TaskPanel>
            );
          })} */}
        {/* <TaskPanel>
          <PanelName
            listName={'In Progress'}
            icon={'📚'}
            onClick={() => handleDeleteRenameVisibility('inProgress')}
          />
          <TaskCard />
          <TaskCard />
          <AddCardButton />
          <Box
            sx={{
              position: 'absolute',
              zIndex: '5',
              top: '2rem',
              right: '-7rem',
            }}>
            {visibleState.inProgress && <DeleteRename />}
          </Box>
        </TaskPanel>
        <TaskPanel>
          <PanelName
            listName={'In Review'}
            icon={'⚙️'}
            onClick={() => handleDeleteRenameVisibility('inReview')}
          />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <AddCardButton />
          <Box
            sx={{
              position: 'absolute',
              zIndex: '5',
              top: '2rem',
              right: '-7rem',
            }}>
            {visibleState.inReview && <DeleteRename />}
          </Box>
        </TaskPanel>
        <TaskPanel>
          <PanelName
            listName={'Completed'}
            icon={'👌'}
            onClick={() => handleDeleteRenameVisibility('completed')}
          />
          <TaskCard />
          <TaskCard />
          <AddCardButton />
          <Box
            sx={{
              position: 'absolute',
              zIndex: '5',
              top: '2rem',
              right: '-7rem',
            }}>
            {visibleState.completed && <DeleteRename />}
          </Box>
        </TaskPanel> */}
      </Board>
      {/* <CardInformation /> */}
      {/* <AllBoard/> */}
      <AnimatePresence>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.7,
            ease: [0.17, 0.67, 0.69, 1.39],
          }}
          exit={{ opacity: 0, scale: 0 }}>
          {visibleModalState && (
            <Box sx={{ position: 'absolute', top: '9rem', zIndex: 7 }}>
              <Visibility />
            </Box>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BoardPage;
