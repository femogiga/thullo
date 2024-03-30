const {
  getAllPanel,
  getPanelById,
  updatePanel,
  createPanel,
  deletePanel,
  getPanelByBoardId,
  updatePanelByPanelId,
  deletePanelTwo,
} = require('../controllers/panelController');
const router = require('express').Router();
router.get('/:id/card', getPanelById);
router.get('/:boardId', getPanelByBoardId);
router.get('/:id', getPanelById);
router.put('/:id', updatePanel);
router.put('/', updatePanelByPanelId);
router.get('/', getAllPanel);
router.post('/', createPanel);
router.delete('/:panelId', deletePanel);
router.delete('/', deletePanelTwo);

module.exports = router;
