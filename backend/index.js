const express = require('express');
const cors = require('cors');
const path = require('path')

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  next();
});

app.post('/api/contact', (req, res) => {
  const { name, message } = req.body;
  console.log(`New message from ${name}: ${message}`);
  res.status(200).json({ success: true });
});

const galleryImages = [
  { url: '/images/image1.jpg', description: 'Image 1' }
];

app.get('/api/gallery', (req, res) => {
  res.json(galleryImages);
});

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});