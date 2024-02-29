import React from 'react';
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
import CardInformation from '../../cardinformation/CardInformation';
import Visibility from '../../auxillary/Visibility';
import { Box } from '@mui/material';

const BoardPage = () => {
  const pageInfoVisibility = useSelector(
    (state) => state.pageInformation.visible
  );
  const visibleModalState = useSelector((state) => state.visibility.visible);
  return (
    <div>
      <Header />
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
