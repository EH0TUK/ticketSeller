const {Basket} = require('../models/models')
const {BasketTicket} = require('../models/models')
const ApiError = require('../error/ApiError')

class BasketController {
    async getOne(req, res) {
        const basketId = req.user.id
        const basket = await BasketTicket.findOne({where: {basketId}})
        return res.json(basket)
    }
}

module.exports = new BasketController()