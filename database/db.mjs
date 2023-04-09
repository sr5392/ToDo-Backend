import mongoose from "mongoose";

const connectionString = process.env.MONGODB_URI;
mongoose.connect(connectionString);

const db = mongoose.connection;

db.on("error", (error) => {
    console.log(error);
})

db.once("connected", () => {
    console.log("Database connected")
})

