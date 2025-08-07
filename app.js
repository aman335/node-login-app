const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

//  Root route for Render health check
app.get('/', (req, res) => {
  res.send('App is live!');
});

// Hardcoded user data (example)
const user = {
  username: 'admin',
  password: 'password123'
};

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === user.username && password === user.password) {
    res.json({ success: true, message: 'Login successful!' });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server chal raha hai on port ${PORT}`);
});
