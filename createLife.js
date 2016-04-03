'use strict'

const _ = require('lodash')

class CreateLife {

  constructor(limit) {
    this.limit = limit
    this.universe = []
  }

  get rInt() {
    return Math.floor(Math.random() * (118 - 0 + 1)) + 0
  }

  get initializeLife() {
    for (let i = 0; i < this.limit + 1; i++) {
      for (let k = 0; k < this.limit + 1; k++) {
        for (let v = 0; v < this.limit + 1; v++) {
          this.universe.push(
            {
              x: i,
              y: k,
              z: v,
              atom: {
                electrons: this.rInt,
                nucleus: {
                  protons: this.rInt,
                  neutrons: this.rInt
                },
              }
            }
          )
        }
      }
    }
  }

  get setAtomId() {
    _.map(this.universe, (lifeBlock) => {
      lifeBlock.atom['atomId'] = Math.random().toString(36).substring(7)
    })
  }

  get determineChargeOfAtoms() {
    this.setAtomId
    _.map(this.universe, (lifeBlock) => {
      if (lifeBlock.atom.nucleus.protons === lifeBlock.atom.electrons) {
        lifeBlock['charge'] = 0
      } else if (lifeBlock.atom.nucleus.protons > lifeBlock.atom.electrons) {
        lifeBlock['charge'] = 1
      } else {
        lifeBlock['charge'] = -1
      }
    })
  }

}

module.exports = CreateLife
