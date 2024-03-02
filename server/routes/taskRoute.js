const {
  getAllTask,
  getTaskById,
  updateTask,
  createTask,
  deleteTask,
} = require('../controllers/taskController');
const router = require('express').Router();

router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.get('/', getAllTask);
router.post('/', createTask);
router.delete('/:id', deleteTask);

module.exports = router;
