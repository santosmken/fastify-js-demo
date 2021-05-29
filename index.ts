import fastify from 'fastify'
import axios from 'axios';

const server = fastify({
      logger: true
})

server.get('/todos', async (request, reply) => {
      request.log.info('something');
      const todos = await axios.get('https://jsonplaceholder.typicode.com/todos').then(res => res.data);
  return reply.send(todos);
});

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
});