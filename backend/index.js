import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/connect.js';
import apiRoutes from './routes/index.routes.js';
import { errorHandler, notFoundHandler } from './middleware/error.middleware.js';


dotenv.config();

const app = express();


// middleware

app.use(cors());
app.use(express.json({ limit: '50mb' }));


// routes

app.use('/api/v1', apiRoutes);


// error handling

app.use(errorHandler);
app.use(notFoundHandler);


// start server

const startServer = async () => {
    const serverPort = process.env.PORT || 5000;

    try {
        connectDB(process.env.MONGO_URI)
            .then(() => {
                app.listen(serverPort, () => {
                    console.log(`🚀 Server is running on port ${serverPort}`);
                    console.log(`🚀 api is running on http://localhost:${serverPort}/`);
                });
            })
            .catch((error) => {
                console.log('🚨 Error connecting to MongoDB database\n', error);
            });
    } catch (error) {
        console.log(error);
    }
};

startServer();

