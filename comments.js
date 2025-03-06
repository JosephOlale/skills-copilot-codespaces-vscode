// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Use the static files in the public directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
