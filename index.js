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
  let cL = new createLife(1)
  cL.initializeLife
  res.render('universe', { universe: cL.universe.length})
})


io.sockets.on('connection', socket => {

  let status = ""

  socket.on('message', (channel, message) => {
    let makeNewUniverses = () => {
      setTimeout(() => {
        if (status === "go") {
          let cL = new createLife(1)
          cL.initializeLife
          io.to(socket.id).emit('sendNewUniverse', cL);
          makeNewUniverses()
        }
      }, 1000)
    }

    if (channel === 'universeCall') {
      status = "go"
      makeNewUniverses()
    }

    if (channel === 'stopViz') {
      status = "stop"
    }

  })
})

module.exports = app
