const mongoose = require("./connection.js");


const EquipmentSchema = new mongoose.Schema({
  name: String,
 rating: String,
  college: String,
  image: String,
  description: String,
  price: Number

});

const EquipmentCollection = mongoose.model("equipment", EquipmentSchema);

const getEquipmentById = id => {
  return EquipmentCollection.findOne({ _id: id });
};

const getAllEquipments = () => {
  return EquipmentCollection.find({});
};

const getEquipmentByName = () => {
  return EquipmentCollection.findOne({ name: name });
};

const createEquipment = newEquipment => {
  return EquipmentCollection.create(newEquipment);
};

const updateEquipment = (id, updatedEquipmentObject) => {
  return EquipmentCollection.updateOne({ _id: id }, updatedEquipmentObject);
};

const deleteEquipment = id => {
  return EquipmentCollection.deleteOne({ _id: id });
};
module.exports = {
  getEquipmentById,
  getAllEquipments,
  createEquipment,
  updateEquipment,
  deleteEquipment,
  getEquipmentByName
};
