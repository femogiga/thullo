const {
  getAllPanel,
  getPanelById,
  updatePanel,
  createPanel,
  deletePanel,
  getPanelByBoardId,
} = require('../controllers/panelController');
const router = require('express').Router();
router.get('/:boardId', getPanelByBoardId);
router.get('/:id', getPanelById);
router.put('/:id', updatePanel);
router.get('/', getAllPanel);
router.post('/', createPanel);
router.delete('/:id', deletePanel);

module.exports = router;
