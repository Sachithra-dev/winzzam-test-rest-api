const router = require("express").Router();
const monthController = require("../controllers/monthController");



//add a job
router.post("/",monthController.createMonth);


//get job
router.get("/:id",monthController.getMonth);

//get all jobs
router.get("/",monthController.getAllMonths);

//search jobs
router.get("/search/:key",monthController.searchMonths);


module.exports = router