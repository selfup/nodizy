'use strict'

const assert = require('assert')
const request = require('request')
const app = require('../index')

describe('Server', function() {
  before(function(done) {
    this.port = 9000
    this.server = app.listen(this.port, function(error, result) {
      if (error) {return done(error) }
      done()
    })
    this.request = request.defaults({
      baseUrl: 'http://localhost:9000/'
    })
  })

  after(function() {
    this.server.close()
  })

  it('exist', function() {
    assert(app)
  })

  describe('GET /', function() {

   it('should return a 200', function(done) {
     this.request.get('/', function(error, response) {
       if (error) { done(error) }
        assert.equal(response.statusCode, 200)
        done()
     })
   })

    it('should have a body with the name of the application', function(done) {
      this.request.get('/', function(error, response) {
        if(error) { done(error) }
          assert(response.body.includes('REJS'),
          `"${response.body}" does not include "${'title'}"`)
          done()
      })
    })
  })
})
