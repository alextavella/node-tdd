'use strict'

const server = require('../')
const Lab = require('lab')
const lab = exports.lab = Lab.script()
const co = require('co')
const assert = require('assert')
const expect = require('code').expect

lab.experiment('GET /', () => {
    lab.test('deve funcionar', co.wrap(function* () {
        let res = yield server.inject({ url: '/', method: 'GET' })

        // assert.equal(res.statusCode, 200)
        // assert.equal(res.result, 'Hello World')
        expect(res.statusCode).to.be.equal(200)
        expect(res.result).to.equal('Hello World')
    }))
})

lab.experiment('POST /', () => {
    lab.test('deve cadastrar usuario', co.wrap(function* () {
        let res = yield server.inject({ url: '/', method: 'POST', payload: { name: 'Alex' } })

        expect(res.statusCode).to.be.equal(200)
        expect(res.result).to.contain('Alex')
    }))
})

lab.experiment('POST /fail', () => {
    lab.test('nao deve cadastrar usuario', co.wrap(function* () {
        let res = yield server.inject({ url: '/', method: 'POST', payload: null })

        expect(res.statusCode).to.be.equal(500)
    }))
})
