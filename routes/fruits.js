// binds a http reques to a controller
const express = require("express");
const router = express.Router(); 
const fruits = require("../controllers/fruits")

// get to "/" bind it to the controller and do the function
router.get('/', fruits.index) 
// router deals with the url "/fruits/ ..." so it calls the index function based on the specific fruit
// the index function is found in the controller
router.get('/:name', fruits.oneFruit) 
router.post("/", fruits.create) // the order of these router http verbs is Very important (will be necessary in the debug)
router.patch("/:name", fruits.update)
router.delete("/:name", fruits.deleted)

module.exports = router