const {
  getAllChat,
  getChatById,
  updateChat,
  createChat,
  deleteChat,
} = require('../controllers/chatController');
const router = require('express').Router();

router.get('/:id', getChatById);
router.put('/:id', updateChat);
router.get('/', getAllChat);
router.post('/', createChat);
router.delete('/:id', deleteChat);

module.exports = router;
