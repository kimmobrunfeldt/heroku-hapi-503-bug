const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ host: '0.0.0.0', port: process.env.PORT || 8000 })

server.route({
    method: 'POST',
    path:'/',
    handler: function (request, reply) {

        return reply('hello world');
    }
});

server.start((err) => {
  if (err) throw err;

  console.log('Server listening .. ');
});
