import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import eventRoutes from './routes/eventRoutes.js';

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Link our routes
app.use('/api/events', eventRoutes);

const PORT = process.env.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
