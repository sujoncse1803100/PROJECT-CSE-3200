const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

const MongoDB_URI = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.8sqwyoq.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(
  MongoDB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("MongoDB Conected");
  }
);

app.get("/", (req, res) => {
  res.status(200).send("welcome to server");
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log("server is running at http://localhost:" + port);
});
