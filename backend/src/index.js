require('dotenv').config({ path: 'variable.env' });
const createServer = require('createServer');
const db = require('./db');

const server = createServer();

// TODO : use express middlewares to handle cookies (JWT)
// TODO : use express middlewares to populate current user

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
