'use strict'

class CreateLife {
  constructor(limit, lifeBlock) {
    this.limit = limit
    this.lifeBlock = lifeBlock
    this.universe = []
  }

  get rInt() {
    return Math.floor(Math.random() * (118 - 0 + 1)) + 0
}

  get initializeLife() {
    for (let i = 0; i <= limit; i++) {
      for (let k = 0; k <= limit; i++) {
        for (let v = 0; v <= limit; i++) {
        universe.push({
            x: this.lifeBlock.x = i,
            y: this.lifeBlock.y = k,
            z: this.lifeBlock.z = v,
            atom: {
              electrons: this.lifeBlock.atom.electrons = this.rInt,
              nucleus: this.lifeBlock.atom.nucleus = {
                protons: this.lifeBlock.atom.nucleus.protons = this.rInt,
                neutrons: this.lifeBlock.atom.nucleus.neutrons = this.rInt
              },
            }
          })
        }
      }
    }
  }
}

module.exports = CreateLife
