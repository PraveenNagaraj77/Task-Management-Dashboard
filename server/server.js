const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Prevent serving static files (like the 'public' folder)
server.use(middlewares);

// Use router to handle routes
server.use(router);

// Start the server on port 5000
server.listen(5000, () => {
  console.log('JSON Server is running on port 5000');
});
