const express = require("express");


const equipmentApi = require("../models/equipment.js");



const EquipmentRouter = express.Router();



EquipmentRouter.get("/", (req, res) => {
  equipmentApi
    .getAllEquipments()
    .then(allEquipments => {
      res.render("equipment/allEquipments", { allEquipments });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

EquipmentRouter.get("/new", (req, res) => {
  res.render("equipment/createEquipment");
});

EquipmentRouter.get("/edit/:id", (req, res) => {
  const equipmentId = req.params.id;

  equipmentApi
    .getEquipmentById(equipmentId)
    .then(equipment => {
      res.render("equipment/editEquipment", { equipment });
    })
    .catch(error => {
      console.log(error);
    });
});

EquipmentRouter.get("/:id", (req, res) => {
  const equipmentId = req.params.id;

  equipmentApi
    .getEquipmentById(equipmentId)
    .then(equipment => {
      res.render("equipment/singleEquipment", { equipment });
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

EquipmentRouter.post("/", (req, res) => {
  const newEquipment = req.body;

  equipmentApi
    .createEquipment(newEquipment)
    .then(createdEquipment => {
      res.redirect("/equipment");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

EquipmentRouter.put("/:id", (req, res) => {
  equipmentApi
    .updateEquipment(req.params.id, req.body)
    .then(() => {
      res.redirect(`/equipment/${req.params.id}`);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

EquipmentRouter.delete("/:id", (req, res) => {
  const equipmentId = req.params.id;
  equipmentApi
    .deleteEquipment(equipmentId)
    .then(() => {
      res.redirect("/equipment");
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

EquipmentRouter.get("/byName/:name", (req, res) => {
  const equipmentName = req.params.equipmentName;

  equipmentApi
    .getEquipmentByName(equipmentName)
    .then(equipments => {
      res.json(equipments);
    })
    .catch(error => {
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  EquipmentRouter
};
