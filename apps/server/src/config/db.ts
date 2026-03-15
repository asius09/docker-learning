import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://admin:password@mongo:27017");
    } catch (error) {
        console.log(error);
    }
}