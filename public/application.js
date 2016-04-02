'use strict'
const socket = io()
const universeCall = document.getElementById('universeCall')
const sendNewUniverse = document.getElementById('sendNewUniverse')
const atoms = document.getElementById('atoms')

socket.on("sendNewUniverse", function (message) {
  appendUniverseProps(message.universe)
})

const appendUniverseProps = (message) => {
  $(electrons).empty()
  for(let i = 0; i < message.length; i++) {
    $(electrons).append(`<p>${message[i].atom.electrons}</p>`)
  }
}

$('#newUniverse').on('click', function() {
  socket.send('universeCall')
})
