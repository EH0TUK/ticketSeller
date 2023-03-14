const Router = require('express')
const router = new Router()
const SessionController = require('../controllers/sessionController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'), SessionController.create)
router.get('/', SessionController.getAll)
router.get('/:id', SessionController.getOne)


module.exports = router