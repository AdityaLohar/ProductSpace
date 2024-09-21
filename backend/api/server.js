const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("../db/connectDb.js");
const cors = require("cors");
const {submitEnquiry} = require("../controllers/userController.js")

dotenv.config()

connectDb();
const app = express()

const PORT = process.env.PORT || 5000

app.use(cors());
app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ extended: true }))

app.get("/api", (req, res) => {
  res.json({msg: "Hello"})
})
app.post("/api/submit-enquiry", submitEnquiry);

app.listen(PORT, () => {
    console.log("server running")
})
