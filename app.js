const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.use(express.static("./public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = process.env.MONGO_URL;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.log("******  Some Error in DB connection **********");
    console.log(err);
  });

app.listen(port, () => console.log(`App is running at ${port}`));
