const { getUserPhoto, AllBoardPage } = require('../controllers/allBoardController');

const router = require('express').Router();

router.get('/:id', getUserPhoto);
router.get('/', AllBoardPage);

module.exports = router;
