const express = require('express')
const { engine } = require('express-handlebars')
const route = require('./routes/route')
const methodOvevride = require('method-override')
const app = express()
const path = require('path')

require('dotenv').config()
const port = process.env.PORT || 3000


// connect to DB
const db = require('./config/db/connectDB')
db.connectToDB()

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, './resources/views'))

app.use(methodOvevride('_method'))

app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded())
app.use(express.json())

route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})