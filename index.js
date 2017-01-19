'use strict'

const Hapi = require('hapi')
const server = module.exports = new Hapi.Server()

server.connection({ port: 8080 })

server.route({
    path: '/',
    method: 'GET',
    handler: (request, reply) => reply('Hello World')
})

server.route({
    path: '/',
    method: 'POST',
    handler: (request, reply) => {
        if (request.payload) return reply(`Olá ${request.payload.name}!`)
        reply().code(500);
    }
})

server.start((err) => {
    // if (err) throw err;
    console.log('Server running at:', server.info.uri);
})
