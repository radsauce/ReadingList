const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.engine('jsx', require('express-react-views').createEngine())

// require('./routes/apiRoutes')(app)
require('./routes/htmlRoutes')(app)

const PORT = process.env.PORT || 3000
app.listen(PORT, _ => console.log(`http://localhost:${PORT}`))