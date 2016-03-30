'use strict'

const ejs = require('ejs')
const http = require('http')
const express = require('express')
const socketIo = require('socket.io')
const _ = require('lodash')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
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

app.get('/universe', (req, res) => {
  let cL = new createLife(12)
  cL.initializeLife
  res.render('universe', { universe: cL.universe.length})
})

module.exports = app
