const homeRoute = require('./home.route')

module.exports = function route(app) {
    app.use('/', homeRoute)
}