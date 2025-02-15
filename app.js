const express = require('express');
const logger = require('morgan');
const cors = require('cors');
require("dotenv").config();

// const consumedWaterRouter = require('./routes/api/consumedWater');
// const userRouter = require("./routes/api/users");

const app = express()


const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use(express.static("public"));

// app.use("/users", userRouter);
// app.use("/consumedWater", consumedWaterRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res) => {
  res.status(500).json({ message: err.message });
});

module.exports = app
