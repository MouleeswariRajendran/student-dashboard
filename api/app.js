const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require('path');
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;


app.use(express.json());
app.use(cors());
app.use(bodyparser.json());

const studentRouter = require("./Routes/StudentRoute");
const loginRouter = require("./Routes/LoginRoute");
const capstoneRouter = require("./Routes/CapstoneRoute");
const leaveRouter = require("./Routes/LeaveRoute");
const portfolioRouter = require("./Routes/PortfolioRoute");
const queryRouter = require("./Routes/QueryRoute");
const taskRouter = require("./Routes/TaskRoute");
const webcodeRouter = require("./Routes/WebcodeRoute");

mongoose.set("strictQuery", true);
mongoose
  .connect(DB_URL, {})
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.log("could not connect to MongoDB", err));

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/client/dist'))); //dist vite oda server

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client','dist','index.html')); //index.html root file
});

app.use(studentRouter);
app.use(loginRouter);
app.use(capstoneRouter);
app.use(leaveRouter);
app.use(portfolioRouter);
app.use(queryRouter);
app.use(taskRouter);
app.use(webcodeRouter);


app.listen(PORT, () => {
  console.log("successfully running on the port", PORT);
});

module.exports = app;
