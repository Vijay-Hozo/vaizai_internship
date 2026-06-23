const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./Routes/ProductRoute");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());

mongoose.connect(
    process.env.MONGODB_URL
).then(() => console.log("Connected to MongoDB")
).catch((err) => console.error("Failed to connect to MongoDB", err));


app.use("/products", productRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});


// Model creation 

// Controller creation

// Route creation

// Main server/index file creation