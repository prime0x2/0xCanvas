import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import connectDB from './config/connect.js';


dotenv.config();

const app = express();


// middleware

app.use(cors());
app.use(express.json({ limit: '50mb' }));


// routes

app.get('/', async (req, res) => {
    res.send('hello world');
});


// start server

const startServer = async () => {
    const serverPort = process.env.PORT || 5000;

    try {
        connectDB(process.env.MONGO_URI)
            .then(() => {
                app.listen(serverPort, () => {
                    console.log('🚀 Server is running on port 8080');
                    console.log('🚀 api is running on http://localhost:8080/');
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

