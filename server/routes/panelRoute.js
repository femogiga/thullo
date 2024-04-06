const {
  checkAdminPanelDelete,
  checkAdminPanelRename,
} = require('../authentication/roleMiddleware');
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
router.put('/:id', checkAdminPanelRename, updatePanel);
router.put('/', checkAdminPanelRename, updatePanelByPanelId);
router.get('/', getAllPanel);
router.post('/', checkAdminPanelRename, createPanel);
router.delete('/:panelId', checkAdminPanelDelete, deletePanel);
//router.delete('/',checkAdmin, deletePanelTwo);

module.exports = router;
