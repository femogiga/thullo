const {
  getAllTasksOnLabels,
  getTasksOnLabelsById,
  updateTasksOnLabels,
  createTasksOnLabels,
  deleteTasksOnLabels,
} = require('../controllers/taskOnLabelController');
const router = require('express').Router();

router.get('/:id', getTasksOnLabelsById);
router.put('/:id', updateTasksOnLabels);
router.get('/', getAllTasksOnLabels);
router.post('/', createTasksOnLabels);
router.delete('/:id', deleteTasksOnLabels);

module.exports = router;
