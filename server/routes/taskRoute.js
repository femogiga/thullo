const{checkTasksActions} = require('../authentication/roleMiddleware')

const {
  getAllTask,
  getTaskById,
  getAllTasksWithUsersAndLabels,
  updateTask,
  createTask,
  deleteTask,
  getTaskByPanelId,
  updateTaskPosition,
} = require('../controllers/taskController');
const router = require('express').Router();
router.get('/card/:id', getTaskById);
router.get('/card', getAllTasksWithUsersAndLabels);
router.get('/:panelId', getTaskByPanelId);
router.put('/cardposition', updateTaskPosition);
router.put('/:id',checkTasksActions, updateTask);
router.get('/', getAllTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);

module.exports = router;

