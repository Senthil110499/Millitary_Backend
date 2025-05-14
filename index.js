import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './database/Dbconfig.js';
import authRoutes from './routes/authRoutes.js';
import assetRoutes from './routes/assetRoutes.js';
import purchaseRoutes from './routes/purchaseRoutes.js';
import transferRoutes from './routes/transferRoutes.js';
import assignmentRoutes from './routes/assignmentRoutes.js';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// DB Connection
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/purchases', purchaseRoutes);
app.use('/api/transfers', transferRoutes);
app.use('/api/assignments', assignmentRoutes);

app.get('/', (req, res) => {
    res.status(200).send(`<div style="text-align: center; background-color:purple;  padding: 10px;"><h1>Military Asset Management System</h1></div>`)
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log("App is listening with port",port);
})





