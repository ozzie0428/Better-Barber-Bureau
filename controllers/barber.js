const express = require("express");

const barberApi = require("../models/barber.js");

const BarberRouter = express.Router();

BarberRouter.get("/", (req, res) => {
  barberApi
    .getAllBarbers()
    .then(allBarbers => {
      res.json(allBarbers);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

BarberRouter.get("/:id", (req, res) => {
  const barberId = req.params.id;

  barberApi
    .getBarberById(barberId)
    .then(barber => {
      res.json(barber);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

BarberRouter.post("/", (req, res) => {
  const newBarber = req.body;

  barberApi
    .createBarber(newBarber)
    .then(createdBarber => {
      res.json("/barber");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

BarberRouter.put("/:id", (req, res) => {
  barberApi
    .updateBarber(req.params.id, req.body)
    .then(() => {
      res.json(`/barber/${req.params.id}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

BarberRouter.delete("/:id", (req, res) => {
  const barberId = req.params.id;

  barberApi
    .deleteBarber(barberId)
    .then(() => {
      res.json({ success: true, deleted: barberId });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

BarberRouter.get("/byName/:name", (req, res) => {
  const barberName = req.params.barberName;

  barberApi
    .getBarberByName(barberName)
    .then(barbers => {
      res.json(barbers);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  BarberRouter
};
