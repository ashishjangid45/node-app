// Step 1: Import the http module
const http = require('http');

// Step 2: Create a server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content-Type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  
  // Step 3: Send the response body
  res.end('Hello World\n');
});

// Step 4: Define the port the server will listen on
const port = 3001;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
