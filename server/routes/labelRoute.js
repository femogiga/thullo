const {
  getAllLabel,
  getLabelById,
  updateLabel,
  createLabel,
  deleteLabel,
  getLabelByTaskId,
} = require('../controllers/labelController');
const router = require('express').Router();

router.get('/tasks/:id', getLabelByTaskId);

router.get('/:id', getLabelById);
router.put('/:id', updateLabel);
router.get('/', getAllLabel);
router.post('/', createLabel);
router.delete('/:id', deleteLabel);

module.exports = router;
