'use strict'
const socket = io()
const universeCall = document.getElementById('universeCall')
const sendNewUniverse = document.getElementById('sendNewUniverse')
const stopViz = document.getElementById('stopViz')

socket.on("sendNewUniverse", message => {
  appendUniverseProps(message.universe)
})

const appendUniverseProps = message => {
  emptyProps()
  for (let i = 0; i < message.length; i++) {
    populateProps(i, message)
  }
}

const emptyProps = () => {
  $(electrons).empty()
  $(atoms).empty()
  $(neutrons).empty()
  $(protons).empty()
  $(charge).empty()
  $(atomId).empty()
}

const populateProps = (i, message) => {
  $(atoms).append(`<h6>${i}</h6>`)
  $(electrons).append(`<h6>${message[i].atom.electrons}</h6>`)
  $(neutrons).append(`<h6>${message[i].atom.nucleus.neutrons}</h6>`)
  $(protons).append(`<h6>${message[i].atom.nucleus.protons}</h6>`)
  $(charge).append(`<h6>${message[i].charge}</h6>`)
  $(atomId).append(`<h6>${message[i].atom.atomId}</h6>`)
}

$('#newUniverse').on('click', () => {
  socket.send('universeCall')
})

$('#stopViz').on('click', () => {
  socket.send('stopViz')
})
