const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.engine('jsx', require('express-react-views').createEngine())

require('./routes/htmlRoutes')(app)
require('./routes/bookRoutes')(app)

const PORT = process.env.PORT || 6969
app.listen(PORT, _ => console.log(`http://localhost:${PORT}`))