import mongoose from "mongoose"

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log("Connection to db successfull")
    } catch (err) {
        console.log("Error in connecting to DB")
        process.exit(1);
    }
}

export default connectDb;