const mongoose = require("mongoose");
const express = require("express");
const app = express();

const path = require("path");

const { EquipmentRouter } = require("./controllers/equipment.js");
const { BarberRouter } = require("./controllers/barber.js");
const { ReviewRouter } = require("./controllers/review.js");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.use("/api/equipment", EquipmentRouter);
app.use("/api/barber", BarberRouter);
app.use("/api/review", ReviewRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
