import mongoose from "mongoose";

const connectDB = async (url) => {
    mongoose.set('strictQuery', true);

    return mongoose.connect(url)
        .then(() => {
            console.log("🏭 Connected to MongoDB database")
        })
};

export default connectDB;