import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userrouter from './routes/USerRoutes.js';
import 'dotenv/config.js'

import cartrouter from './routes/cartrouter.js';
import orderrouter from './routes/orderrouter.js';
const app = express();
const port = 5000



// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
connectDB();

app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userrouter)
app.use("/api/cart",cartrouter)
app.use("/api/order",orderrouter)



// Routes
app.get('/', (req, res) => {
  res.send('App working');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
