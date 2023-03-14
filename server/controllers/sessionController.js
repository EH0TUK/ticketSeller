const {Session} = require('../models/models')
const ApiError = require('../error/ApiError')

class SessionController {
    async create(req, res) {
        const {time, date} = req.body
        const session = await Session.create({time, date})
        return res.json(session)
    }
    async getOne(req, res) {
        console.log(req.params)
        const {id} = req.params
        const session = await Session.findOne({where: {id}})
        return res.json(session)
    }
    async getAll(req, res) {
        const sessions = await Session.findAll()
        return res.json(sessions)
    }
}

module.exports = new SessionController()