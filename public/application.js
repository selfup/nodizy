'use strict'
const socket = io()
const universeCall = document.getElementById('universeCall')
const sendNewUniverse = document.getElementById('sendNewUniverse')

socket.on("sendNewUniverse", function (message) {
  appendUniverseProps(message.universe)
})

const emptyProps = () => {
  $(electrons).empty()
  $(atoms).empty()
  $(neutrons).empty()
  $(protons).empty()
}

const populateProps = (i, message) => {
  $(atoms).append(`<h6>${i}</h6>`)
  $(electrons).append(`<h6>${message[i].atom.electrons}</h6>`)
  $(neutrons).append(`<h6>${message[i].atom.nucleus.neutrons}</h6>`)
  $(protons).append(`<h6>${message[i].atom.nucleus.protons}</h6>`)
}

const appendUniverseProps = (message) => {
  emptyProps()
  for(let i = 0; i < message.length; i++) {
    populateProps(i, message)
  }
}

$('#newUniverse').on('click', function() {
  socket.send('universeCall')
})
