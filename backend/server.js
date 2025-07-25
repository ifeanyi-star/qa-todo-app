const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

let users = [{ username: 'ifeanyi', password: '1234' }];
let todos = [];

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) return res.json({ token: 'valid-token' });
  return res.status(401).json({ error: 'Invalid credentials' });
});

app.get('/items', (req, res) => res.json(todos));

app.post('/items', (req, res) => {
  const item = { id: Date.now(), ...req.body };
  todos.push(item);
  res.status(201).json(item);
});

app.put('/items/:id', (req, res) => {
  const index = todos.findIndex(t => t.id == req.params.id);
  if (index !== -1) {
    todos[index] = { ...todos[index], ...req.body };
    return res.json(todos[index]);
  }
  res.status(404).json({ error: 'Item not found' });
});

app.delete('/items/:id', (req, res) => {
  todos = todos.filter(t => t.id != req.params.id);
  res.status(204).end();
});

app.listen(5000, () => console.log('API running on http://localhost:5000'));