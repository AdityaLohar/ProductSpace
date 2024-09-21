const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("../db/connectDb.js");
const cors = require("cors");
const { submitEnquiry } = require("../controllers/userController.js");

dotenv.config();

connectDb();
const app = express();

const PORT = process.env.PORT || 5000;

// CORS configuration: allow only your frontend to access the backend
app.use(cors({
  origin: 'https://theproductspace.co.in', // Replace with your frontend domain
  methods: ['GET', 'POST'], // Specify allowed methods
  allowedHeaders: ['Content-Type'], // Specify allowed headers
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.json({ msg: "Hello" });
});

app.post("/api/submit-enquiry", submitEnquiry);
app.post("/api/formdata", submitEnquiry);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});