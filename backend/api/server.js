// // api/formdata.js
// import mongoose from 'mongoose';

// // MongoDB connection string
// const MONGO_URI = 'mongodb+srv://adityalohar341:B3PZj4uWlAYRW1at@cluster0.tvq4m.mongodb.net';

// // Create a schema
// const formDataSchema = new mongoose.Schema({
//   name: String,
//   number: String,
//   email: String,
// });

// // Create a model
// const FormData = mongoose.models.FormData || mongoose.model('FormData', formDataSchema);

// // Connect to MongoDB
// const connectToDatabase = async () => {
//   if (mongoose.connection.readyState >= 1) return;

//   return mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// };



// // Export the function
// export default async function handler(req, res) {
//   await connectToDatabase(); // Ensure database connection

//   if (req.method === 'POST') {
//     try {
//       const formData = new FormData(req.body);
//       await formData.save();
//       res.status(201).json({ message: 'Data saved successfully', data: formData });
//     } catch (error) {
//       res.status(400).json({ message: 'Error saving data', error });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


import express from "express"
import dotenv from "dotenv"
import connectDb from "./db/connectDb.js"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/userRoutes.js"

dotenv.config()

connectDb();
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.get("/", (req, res) => {
  res.send("Hello this is product space backend")
})

app.listen(PORT, () => {
    console.log("server running")
})

module.exports = app;