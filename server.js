const mongoose = require("mongoose");
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const path = require("path");

const { HomeRouter } = require("./controllers/home.js");
const { EquipmentRouter } = require("./controllers/equipment.js");
const { BarberRouter } = require("./controllers/barber.js");
const { ReviewRouter } = require("./controllers/review.js");

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(methodOverride("_method"));

app.use(express.static(__dirname + "/public"));



app.use("/", HomeRouter);
app.use("/equipment", EquipmentRouter);
app.use("/barber", BarberRouter);
app.use("/review", ReviewRouter);
// Connect to database
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI);
} else {
  mongoose.connect("mongodb://localhost/fantasy");
}
mongoose.connection.on("error", function(err) {
  console.error("MongoDB connection error: " + err);
  process.exit(-1);
});
mongoose.connection.once("open", function() {
  console.log("Mongoose has connected to MongoDB!");
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});