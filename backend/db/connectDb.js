const mongoose = require("mongoose");

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Connection to DB successful");
    } catch (err) {
        console.log(err);
        console.log("Error in connecting to DB");
        process.exit(1);
    }
}

// Change this line
module.exports = connectDb;
