const express = require("express");
const mongoose = require("mongoose");
var cors = require("cors");

const app = express();
require("dotenv").config();

const port = process.env.PORT;
const user = require("./routes/api/User");
const pizza = require("./routes/api/Pizza");

app.use(express.static("./public"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const db = process.env.MONGO_URL + "/" + process.env.MONGO_DB;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => {
    console.log("******  Some Error in DB connection **********");
    console.log(err);
  });

app.use("/api/user", user);
app.use("/api/pizza", pizza);

app.listen(port, () => console.log(`App is running at ${port}`));
