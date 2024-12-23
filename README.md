# Unhandled Promise Rejection in Express.js
This repository demonstrates a common error in Express.js applications: the lack of proper error handling for asynchronous operations within request handlers.  The `bug.js` file shows an example of an Express.js application that makes an asynchronous call without handling any potential errors.  The `bugSolution.js` demonstrates the corrected version with comprehensive error handling. 

## How to Reproduce the Bug
1. Clone this repository.
2. Navigate to the directory containing `bug.js`.
3. Run `node bug.js`. 
4. Notice that if `someAsyncOperation()` throws an error, the server doesn't report it and continues running, leading to unexpected behavior.

## Solution
The `bugSolution.js` file shows how to properly handle errors. The `catch` block now logs the error and sends a proper error response to the client, preventing silent failures and improving application stability.