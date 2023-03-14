const Router = require('express')
const router = new Router()
const ticketRouter = require('./ticketRouter')
const movieRouter = require('./movieRouter')
const sessionRouter = require('./sessionRouter')
const userRouter = require('./userRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/ticket', ticketRouter)
router.use('/movie', movieRouter)
router.use('/session', sessionRouter)
router.use('/basket', basketRouter)

module.exports = router