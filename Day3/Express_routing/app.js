const express = require('express');
const app = express();

app.use(express.json());

let users = [];
let todos = [];

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js application!');
});

// User routes
app.post('/users', (req, res) => {
  const user = req.body;
  users.push(user);
  res.status(201).send(user);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  users = users.map(user => user.id === id ? updatedUser : user);
  res.send(updatedUser);
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  users = users.filter(user => user.id !== id);
  res.status(204).send();
});

// Todo routes
app.post('/todos', (req, res) => {
  const todo = req.body;
  todos.push(todo);
  res.status(201).send(todo);
});

app.get('/todos', (req, res) => {
  res.send(todos);
});

app.put('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTodo = req.body;
  todos = todos.map(todo => todo.id === id ? updatedTodo : todo);
  res.send(updatedTodo);
});

app.delete('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.status(204).send();
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
