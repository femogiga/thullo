const {
  getAllUsersOnTasks,
  getUsersOnTasksById,
  updateUsersOnTasks,
  createUsersOnTasks,
  deleteUsersOnTasks,
} = require('../controllers/usersOnTasksController');
const router = require('express').Router();

router.get('/:id', getUsersOnTasksById);
//router.put('/:id', updateUsersOnTasks);
router.get('/', getAllUsersOnTasks);
router.post('/', createUsersOnTasks);
router.delete('/:id', deleteUsersOnTasks);

module.exports = router;
