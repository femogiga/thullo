
const {
  uploader,
  getAssetByTaskId,
  deleteAssetById,
} = require('../controllers/assetController');
const router = require('express').Router();
router.get('/', getAssetByTaskId);
router.post('/upload', uploader)
router.delete('/', deleteAssetById);



module.exports = router
