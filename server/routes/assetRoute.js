
const {
  uploader,
  getAssetByTaskId,
} = require('../controllers/assetController');
const router = require('express').Router();
router.get('/', getAssetByTaskId);
router.post('/upload',uploader)



module.exports = router
