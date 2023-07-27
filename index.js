const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Set 'trust proxy' to true to enable handling of proxy headers
app.set('trust proxy', true);

// Middleware to parse JSON in the request body
app.use(express.json());

// POST API endpoint
app.post('/api/data', (req, res) => {
  const { body } = req;
  const ipAddress = req.ip; // By default, this would be 127.0.0.1 if trust proxy is not set
  const forwardedIps = req.ips; // Array of proxy server IP addresses

  console.log('Received data from IPs:', forwardedIps.length ? forwardedIps : [ipAddress]);
  console.log('Data received:', body);

  // Send back the IP addresses in the response
  res.status(200).json({ message: 'Data received successfully!', data: body, ips: forwardedIps });
});

// POST API endpoint
app.get('/api/data', (req, res) => {
  const ipAddress = req.ip; // By default, this would be 127.0.0.1 if trust proxy is not set
  const forwardedIps = req.ips; // Array of proxy server IP addresses

  console.log('Received data from IPs:', forwardedIps.length ? forwardedIps : [ipAddress]);

  // Send back the IP addresses in the response
  res.status(200).json({ message: 'Request received successfully!', ips: forwardedIps });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
