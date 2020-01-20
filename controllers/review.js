const express = require("express");

const reviewApi = require("../models/review.js");

const ReviewRouter = express.Router();

ReviewRouter.get("/", (req, res) => {
  reviewApi
    .getAllReviews()
    .then(allReviews => {
      res.json(allReviews);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

ReviewRouter.get("/:id", (req, res) => {
  const reviewId = req.params.id;

  reviewApi
    .getReviewById(reviewId)
    .then(review => {
      res.json(review);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

ReviewRouter.post("/:barberId", (req, res) => {
  var barberId = req.params.barberId;
  const newReview = req.body;
  const overallRating = (newReview.cleanliness + newReview.accuracy) / 2;

  newReview.overallRating = overallRating;
  newReview.barberId = barberId;

  reviewApi

    .createReview(newReview)
    .then(createdReview => {
      res.json({ succes: true, message: "new review added", createdReview });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

ReviewRouter.get("/allreviews/:barberId", (req, res) => {
  const barberId = req.params.barberId;

  reviewApi
    .findReviewByBarberId(barberId)
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      console.log(error.message);
      res.status(404).send(error.message);
    });
});
ReviewRouter.put("/:id", (req, res) => {
  reviewApi
    .updateReview(req.params.id, req.body)
    .then(() => {
      res.json(`/review/${req.params.id}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

ReviewRouter.delete("/:id", (req, res) => {
  const reviewId = req.params.id;
  reviewApi
    .deleteReview(reviewId)
    .then(() => {
      res.json({ success: true, deleted: barberId });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

ReviewRouter.get("/byName/:name", (req, res) => {
  const reviewName = req.params.reviewName;

  reviewApi
    .getReviewByName(reviewName)
    .then(reviews => {
      res.json(reviews);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  ReviewRouter
};
