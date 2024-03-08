const { getMainBoardPanels, getTasksByPanelId } = require('../controllers/mainBoardController');

const router = require('express').Router();

// router.get('/:boardId/tasks/:panelId/', getTasksByPanelId);
router.get('/boardId/panels/:panelId/tasks', getTasksByPanelId);

router.get('/:panelId/tasks', getTasksByPanelId);
router.get('/:boardId', getMainBoardPanels);



module.exports = router;
