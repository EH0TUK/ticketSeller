const Router = require('express')
const router = new Router()
const BasketController = require('../controllers/basketController')
const checkRole = require('../middleware/checkRoleMiddleware')

//router.post('/', BasketController.create)
router.get('/', checkRole('USER'), BasketController.getOne)

module.exports = router