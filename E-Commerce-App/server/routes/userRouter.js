const userCtrl = require('../controllers/userCtrl')
const router = require('express').Router()

router.post('/register', userCtrl.register)
router.post('/login', userCtrl.login)
router.get('/logout', userCtrl.logout)
router.post('/refresh_token', userCtrl.refreshToken)


module.exports = router