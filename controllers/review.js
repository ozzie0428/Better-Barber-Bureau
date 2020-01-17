const express = require("express");


const reviewApi = require("../models/review.js");



const ReviewRouter = express.Router();



ReviewRouter.get("/", (req, res) => {
  reviewApi
    .getAllReviews()
    .then(allReviews => {
      res.render("review/allReviews", { allReviews });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

ReviewRouter.get("/new", (req, res) => {
  res.render("review/createReview");
});

ReviewRouter.get("/edit/:id", (req, res) => {
  const reviewId = req.params.id;

  reviewApi
    .getReviewById(reviewId)
    .then(review => {
      res.render("review/editReview", { review });
    })
    .catch(error => {
      console.log(error);
    });
});

ReviewRouter.get("/:id", (req, res) => {
  const reviewId = req.params.id;

  reviewApi
    .getReviewById(reviewId)
    .then(review => {
      res.render("review/singleReview", { review });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

ReviewRouter.post("/", (req, res) => {
  const newReview = req.body;

  reviewApi
    .createReview(newReview)
    .then(createdReview => {
      res.redirect("/review");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

ReviewRouter.put("/:id", (req, res) => {
  reviewApi
    .updateReview(req.params.id, req.body)
    .then(() => {
      res.redirect(`/review/${req.params.id}`);
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
      res.redirect("/review");
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
