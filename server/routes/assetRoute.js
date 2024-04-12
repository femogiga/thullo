
const {
  uploader,
  getAssetByTaskId,
  deleteAssetById,
} = require('../controllers/assetController');
const router = require('express').Router();
router.post('/upload', uploader);

router.get('/', getAssetByTaskId);
router.delete('/', deleteAssetById);



module.exports = router
