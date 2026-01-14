import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
    } catch (error) {
        console.log("Mongodb connection failed", error);
        process.exit(1)
    }
}