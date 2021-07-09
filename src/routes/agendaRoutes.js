const controller = require("../controllers/agendaControllers");
const express = require("express");
const router = express.Router();

router.get("/home", controller.home);
router.get("/all", controller.getAll);
router.post("/add", controller.createContact);
router.get("/:id", controller.getContactId);
router.delete("/:id", controller.deleteContact);

module.exports = router