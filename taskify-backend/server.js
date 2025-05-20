const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require("./routes/authRoutes");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth");

app.listen(process.env.PORT, () => {
    console.log("Listening to port....");
});