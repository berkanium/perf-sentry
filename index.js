const express = require('express');
const helmet = require('helmet');

const app = express();

// Use helmet to secure HTTP headers
app.use(helmet());

// Start the server
const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${server.address().port}`);
});
