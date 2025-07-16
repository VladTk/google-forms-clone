import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Backend is running!');
});

app.get('/ping', (req, res) => {
  res.json({ message: 'pong' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
