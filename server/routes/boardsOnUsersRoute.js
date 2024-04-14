const {
  getUserOnBoard,
  addUserToBoard,
} = require('../controllers/boardsOnUsersController');

const router = require('express').Router();

router.get('/', getUserOnBoard);
router.post('/', addUserToBoard);

module.exports = router;
