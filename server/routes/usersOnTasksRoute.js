const {
  getAllUsersOnTasks,
  getUsersOnTasksById,
  updateUsersOnTasks,
  createUsersOnTasks,
  deleteUsersOnTasks,
} = require('../controllers/usersOnTasksController');
const router = require('express').Router();


router.delete('/:boardIndex/users/:authorId', deleteUsersOnTasks);
router.get('/:id', getUsersOnTasksById);
//router.put('/:id', updateUsersOnTasks);
router.get('/', getAllUsersOnTasks);
router.post('/', createUsersOnTasks);

module.exports = router;
