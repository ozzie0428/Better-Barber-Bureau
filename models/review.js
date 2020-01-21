const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  name: String,
  cleanliness: Number,
  accuracy: Number,
  overallRating: Number,
  image: String,
  comment: String,
  barberId: { type: String, required: true }
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
const findReviewByBarberId = id => {
  return ReviewCollection.find({ barberId: id });
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
  getReviewByName,
  findReviewByBarberId,
  ReviewCollection
};
