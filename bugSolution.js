const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello, world!');
    })
    .catch(err => {
      console.error('Error during request:', err);
      res.status(500).send('Internal Server Error');
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Simulates an asynchronous operation that might throw an error
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a potential error
    const shouldFail = Math.random() < 0.5; 
    if (shouldFail) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
} 