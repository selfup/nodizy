'use strict'
const socket = io()
const universeCall = document.getElementById('universeCall')
const sendNewUniverse = document.getElementById('sendNewUniverse')

socket.on("sendNewUniverse", function (message) {
  return $(sendNewUniverse).html(`<h4>${message.universe}</h4>`)
})

$('#newUniverse').on('click', function() {
  socket.send('universeCall')
})
