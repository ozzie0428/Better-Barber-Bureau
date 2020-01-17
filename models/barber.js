const mongoose = require("./connection.js");


const BarberSchema = new mongoose.Schema({
  name: String,
 location: String,
 servicesOffered: String,
  ratings: Number,
  price: Number
  
});

const BarberCollection = mongoose.model("barber", BarberSchema);

const getBarberById = id => {
  return BarberCollection.findOne({ _id: id });
};

const getAllBarbers = () => {
  return BarberCollection.find({});
};

const getBarberByName = () => {
  return BarberCollection.findOne({ name: name });
};

const createBarber = newBarber => {
  return BarberCollection.create(newBarber);
};

const updateBarber = (id, updatedBarberObject) => {
  return BarberCollection.updateOne({ _id: id }, updatedBarberObject);
};

const deleteBarber = id => {
  return BarberCollection.deleteOne({ _id: id });
};
module.exports = {
  getBarberById,
  getAllBarbers,
  createBarber,
  updateBarber,
  deleteBarber,
  getBarberByName
};

