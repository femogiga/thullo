const {
  getAllChat,
  getChatById,
  updateChat,
  createChat,
  deleteChat,
  getChatsByTaskId,
} = require('../controllers/chatController');
const router = require('express').Router();
router.get('/task/:taskId', getChatsByTaskId);
router.get('/:id', getChatById);
router.put('/:id', updateChat);
router.get('/', getAllChat);
router.post('/', createChat);
router.delete('/:id', deleteChat);

module.exports = router;
