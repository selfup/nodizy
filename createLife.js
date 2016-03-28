'use strict'

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

}

module.exports = CreateLife
