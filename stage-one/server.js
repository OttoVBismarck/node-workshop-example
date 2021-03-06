// require('express') adds the default export from the express package to our code as "express"
const express = require('express');
// to use express, you've got to instantiate it
const app = express();
// db here until we get into MongoDB
const db = require('./dummy-db');
// "GET" route that gets all the todos in our dummy JS database
// first argument is a 'route' string, second is a callback with Request & Response
app.get('/api/todos', (req, res) => {
  // optional: works as a logger that announces when routes are hit and at what time.
  console.log('GET ' + req.route.path + ' ' + new Date().toISOString());
  // response status
  res.status(200).send({
    success: 'true', // alerts the client app that the request suceeded
    message: 'todos retrieved', // same
    todos: db //the actual "database" object that gets passed with the request as part of the JSON.
  });
});
// constants that are used as config variables can be ALLCAPS-ed
const PORT = 3000;
// makes the server start listening for requests.
app.listen(PORT, () => { // optional callback
  console.log(`We Have Liftoff on port ${PORT}🚀`); // alerts the person who started the server that it's ready.
});