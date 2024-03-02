const {
  getAllUser,
  getUserById,
  updateUser,
  createUser,
  deleteUser,
} = require('../controllers/userController');
const router = require('express').Router();

router.get('/:id', getUserById);
router.put('/:id', updateUser);
router.get('/', getAllUser);
//router.post('/', createUser);
router.delete('/:id', deleteUser);

module.exports = router;
