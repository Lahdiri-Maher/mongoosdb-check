const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
mongoose.connect(
  "mongodb+srv://mendax:league@myfirstmongo.c4f41.mongodb.net/?retryWrites=true&w=majority",
  err => {
    if (err) throw err;
    else console.log("Connected succesfully");
  }
);
app.use("/", require("./routes/userroute"));

const port = 5000;
app.listen(port, () => console.log("listening : 5000"));
