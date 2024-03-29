import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 5000;

// Define a route
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Marketito Server');
});

// Start the server
app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});
