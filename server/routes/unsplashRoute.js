const { getPhotos } = require('../controllers/unSplashController')

const router = require('express').Router()



router.get('/',getPhotos)



module.exports = router
