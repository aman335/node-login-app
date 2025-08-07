const express = require('express');
const app = express();
const PORT = 3000;

// JSON body parse karne ke liye middleware
app.use(express.json());

// Hardcoded user data (as example)
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
  console.log(`Server chal raha hai http://localhost:${PORT}`);
});
