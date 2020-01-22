const mongoose = require("mongoose");
const express = require("express");
const app = express();

const path = require("path");

const { EquipmentRouter } = require("./controllers/equipment.js");
const { BarberRouter } = require("./controllers/barber.js");
const { ReviewRouter } = require("./controllers/review.js");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(__dirname + "/client/build/"));

app.use("/api/equipment", EquipmentRouter);
app.use("/api/barber", BarberRouter);
app.use("/api/review", ReviewRouter);

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/client/build/index.html");
});

const PORT = process.env.PORT || 3001;
const connectionString =
  process.env.MONGODB_URI || "mongodb://localhost/barber";

mongoose.connect(connectionString, { useNewUrlParser: true }).then(() => {
  console.log("Connected To MongoDB : " + connectionString);
  app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
  });
});
