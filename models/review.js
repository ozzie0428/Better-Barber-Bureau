const mongoose = require("./connection.js");


const ReviewSchema = new mongoose.Schema({
  name: String,
  cleanliness: String,
  customerSatisfaction: String,
  pricing: Number,
  accuracy: Number,
  overallRating: Number,
  image: String,
  

});

const ReviewCollection = mongoose.model("review", ReviewSchema);

const getReviewById = id => {
  return ReviewCollection.findOne({ _id: id });
};

const getAllReviews = () => {
  return ReviewCollection.find({});
};

const getReviewByName = () => {
  return ReviewCollection.findOne({ name: name });
};

const createReview = newReview => {
  return ReviewCollection.create(newReview);
};

const updateReview = (id, updatedReviewObject) => {
  return ReviewCollection.updateOne({ _id: id }, updatedReviewObject);
};

const deleteReview = id => {
  return ReviewCollection.deleteOne({ _id: id });
};
module.exports = {
  getReviewById,
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
  getReviewByName
};
