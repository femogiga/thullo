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
import CardInformation from '../../cardinformation/CardInformation';
import { setCardInfoVisible } from '../../../features/PageInformationSlice';
import AddListButton from '../../auxillary/AddListButton';
import AddPanelModal from '../../auxillary/AddPanelModal';
import { useCreatePanelMutation } from '../../../api/panelData';
import { useDispatch } from 'react-redux';
import { setAddPanelModalOpen } from '../../../features/visibilitySlice';
import DeleteRename from '../../auxillary/DeleteRename';

const BoardPage = () => {
  const { taskCard } = useTaskCardData();
  const { createPanelMutation } = useCreatePanelMutation();
  const [title, setTitle] = useState('');
  const [panelTitle, setPanelTitle] = useState('');
  const [dragId, setDragId] = useState(null);
  //const { id } = useParams();
  const params = useParams();
  const dispatch = useDispatch();
  const id = params.id;
  //const [visibleState, setVisibleState] = useState({
  //   backlog: false,
  //   inProgress: false,
  //   inReview: false,
  //   completed: false,
  // });
  // const handleDeleteRenameVisibility = (panel) => {
  //   setVisibleState((prevState) => ({
  //     ...prevState,
  //     [panel]: !prevState[panel],
  //   }));
  // };
  const [visibleStates, setVisibleStates] = useState({});

  // Function to toggle visibility of a panel based on its index
  const handleDeleteRenameVisibility = (index) => {
    setVisibleStates((prevStates) => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));
  };
  const [visibleState, setVisibleState] = useState(false);

  // const handleDeleteRenameVisibility = (panel) => {
  //   setVisibleState((prevState) => !prevState);
  // };

  const handleCreatePanel = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const panelData = { boardId: id, title: panelTitle };
    //console.log(panelData);
    const res = createPanelMutation(panelData);
    res.then(() => dispatch(setAddPanelModalOpen(false)));
  };

  useEffect(() => {}, [params, id]);
  useEffect(() => {}, [dragId, title]);

  const pageInfoVisibility = useSelector(
    (state) => state.pageInformation.visible
  );
  const visibleModalState = useSelector((state) => state.visibility.visible);
  const cardInfoVisible = useSelector(
    (state) => state.pageInformation.cardInfoVisible
  );
  const addPanelModalOpen = useSelector(
    (state) => state.visibility.addPanelModalOpen
  );
  // const { id } = useParams();
  // const { boardByIdData } = useBoardDataId(parseInt(id));
  const { boardByIdData, panelByBoardIdData } = useMainPageData();
  console.log(panelByBoardIdData && panelByBoardIdData);
  const { isSuccess, error, mutateAsync } = useTaskCardMutation();

  const handlePanelTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPanelTitle(e.target.value);
  };
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

  useEffect(() => {}, [mutateAsync]);

  //const [data, setData] = useState(panelByBoardIdData);
  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;
    //console.log(result);
    // Check if there is no destination or if the card was dropped in the same position
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }
    const destTextArray = destination && destination?.droppableId?.split('-');
    //const title = destTextArray[0];
    const titleText = destTextArray[0];
    setTitle(titleText);
    console.log(title);
    //console.log('destArray===>', destArray);
    console.log('boardId===>', id);
    //const destinationId =
    // const idArray = draggableId.split('-');
    //console.log('idArray', idArray);
    // const id = idArray[1];
    //console.log(draggableId);
    //const boardId = id;
    const taskId = parseInt(draggableId);
    console.log(destination.droppableId)
    //
    // if (title && taskId && boardId) {
    if (!isNaN(taskId) || title) {
      setDragId(taskId);
      const dataToSend = {
        title: destination.droppableId,
        boardId: id,
        // taskId: taskId && taskId,
        taskId: taskId,
      };
      console.log('dataToSend===>', dataToSend)
     await  mutateAsync(dataToSend);
    }
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
              const panelIndex = `panel-${index}`;
              const isPanelVisible = visibleStates[panelIndex];

              //
              return (
                <>
                  <Droppable droppableId={panel?.title}>
                    {(provided, snapshot) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          backgroundColor: snapshot.isDraggingOver
                            ? 'lightgrey'
                            : 'white',
                        }}>
                        <TaskPanel
                          key={`panel-${panel?.id}`}
                          panelId={panel?.id}
                          title={panel?.title}
                          index={index}
                          panel={panel}
                          visibleState={visibleState}
                          task={taskCard?.filter(
                            (item) => item?.panelId === panel?.id
                          )}
                          onClick={() =>
                            handleDeleteRenameVisibility(panelIndex)
                          }
                          isPanelVisible={isPanelVisible}
                        />
                        {/* {isPanelVisible && (
                          <div style={{ position: 'absolute', top: '14rem' ,left:'5rem'}}>
                            <DeleteRename />
                          </div>
                        )} */}

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

        <AnimatePresence>
          <motion.div
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'absolute',
              left: '30%',
              top: '4rem',
              zIndex: '4',
            }}>
            {cardInfoVisible && <CardInformation />}
          </motion.div>
        </AnimatePresence>
        <div>
          <AddListButton />
          {addPanelModalOpen && (
            <AddPanelModal
              onSave={handleCreatePanel}
              onChange={handlePanelTitleChange}
            />
          )}
        </div>
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
