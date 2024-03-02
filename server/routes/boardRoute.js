const {
  getAllBoard,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard,
} = require('../controllers/boardController');
const router = require('express').Router();

router.get('/:id', getBoardById);
router.put('/:id', updateBoard);
router.get('/', getAllBoard);
router.post('/', createBoard);
router.delete('/:id', deleteBoard);

module.exports = router;
