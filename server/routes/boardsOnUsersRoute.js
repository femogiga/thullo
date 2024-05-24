const {
  getUserOnBoard,
  addUserToBoard,
  deleteUserfromBoard,
} = require('../controllers/boardsOnUsersController');

const router = require('express').Router();

router.get('/', getUserOnBoard);
router.post('/', addUserToBoard);
router.delete('/', deleteUserfromBoard);

module.exports = router;
