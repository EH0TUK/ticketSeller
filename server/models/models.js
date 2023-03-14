const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"}
})

const Basket = sequelize.define('basket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const BasketTicket = sequelize.define('basket_ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Movie = sequelize.define('movie', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    info: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})

const Ticket = sequelize.define('ticket', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    movie_id: {type: DataTypes.INTEGER, autoIncrement: false},
    movie_session_id: {type: DataTypes.INTEGER, autoIncrement: false},
    place_id: {type: DataTypes.INTEGER, autoIncrement: false},
    reserved: {type: DataTypes.BOOLEAN},
})

const Session = sequelize.define('session', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    date: {type: DataTypes.DATE},
    time: {type: DataTypes.TIME}
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketTicket)
BasketTicket.belongsTo(Basket)

Ticket.hasMany(BasketTicket)
BasketTicket.belongsTo(Ticket)

Movie.hasMany(Ticket)
Ticket.belongsTo(Movie)

Session.hasMany(Ticket)
Ticket.belongsTo(Session)

module.exports = {
    User,
    Basket,
    BasketTicket,
    Ticket,
    Movie,
    Session
}