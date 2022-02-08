const express = require("express");
const router = express.Router();
const exoController = require("../Controllers/exo.controller");


router.post('/addExo' , exoController.createExo);

router.get('/allExo', exoController.getAllExo);









module.exports = router;





