'use strict'

const ejs = require('ejs')
const http = require('http')
const express = require('express')
const socketIo = require('socket.io')
const _ = require('lodash')
const app = express()
const port = process.env.PORT || 3000
const createLife = require('./createLife.js')
const selfupRejs = require('selfup-rejs')
const rejs = new selfupRejs

const server = http.createServer(app)
  .listen(port, () => {
  console.log('Listening on port ' + port + '.')
})

const io = socketIo(server)

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('universe')
})


io.sockets.on('connection', socket => {

  let status = ""

  socket.on('message', (channel, message) => {
    let makeNewUniverses = () => {
      setTimeout(() => {
        if (status === "go") {
          let cL = new createLife(1)
          io.to(socket.id).emit('sendNewUniverse', cL);
          makeNewUniverses()
        }
      }, 1000)
    }

    if (channel === 'universeCall') {
      status = "go"
      rejs.createTable('universeCallLog')
      rejs.newData('universeCallLog', {'universe': 'started'})
      let uniDat = rejs.getTable('universeCallLog')
      io.to(socket.id).emit('universeCallData', uniDat)
      makeNewUniverses()
    }

    if (channel === 'stopViz') {
      rejs.createTable('universeStopLog')
      rejs.newData('universeStopLog', {'universe': 'stopped'})
      let uniDat = rejs.getTable('universeStopLog')
      io.to(socket.id).emit('universeCallData', uniDat)
      status = "stop"
    }

  })
})

module.exports = app
