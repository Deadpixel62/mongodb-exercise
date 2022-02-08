const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const exoRouter = require('./Routes/exo.routes')
const studentRouter = require('./Routes/student.routes')
const cors = require('cors')


app.use(cors())



const Port = process.env.PORT || 4000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send(`Server Connected on Port ${process.env.PORT}`);
});


mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("open", () => {
  console.log("connected to database MongoDb");
});

app.use('/exos', exoRouter)
app.use('/students', studentRouter);

app.listen(Port, () => console.log(`Server connected on port ${Port} aaaaaa`));
