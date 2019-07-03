import { Server } from './server/server';

const server = new Server();
server
  .bootstrap()
  .then(server => {
    console.log('Working in: ', server.application.address());
  })
  .catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
  });
