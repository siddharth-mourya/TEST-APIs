const express = require('express');
const app = express();

// Middleware to parse JSON in the request body
app.use(express.json());

// POST API endpoint
app.post('/api/data', (req, res) => {
  const { body } = req;
  const ipAddress = req.ip; // Get the IP address from the request

  // Send back the IP address in the response
  res.status(200).json({ message: 'Data received successfully!', data: body, ipAddress });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
