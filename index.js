const ejs = require('ejs')
const http = require('http')
const express = require('express')
const socketIo = require('socket.io')
const _ = require('lodash')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
const atom = require('./atom.js')
const necleus = require('./nucleus.js')
const lifeBlock = require('./lifeBlock.js')
const createLife = require('./createLife.js')

const server = http.createServer(app)
  .listen(port, () => {
  console.log('Listening on port ' + port + '.')
})

const io = socketIo(server)

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

var cL = new createLife(1)
console.log(cL.initializeLife)
console.log(cL.universe)

module.exports = app
