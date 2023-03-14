const Router = require('express')
const router = new Router()
const MovieController = require('../controllers/movieController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), MovieController.create)
router.get('/', MovieController.getAll)

module.exports = router