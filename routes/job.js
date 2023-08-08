const router = require("express").Router();
const jobController = require("../controllers/jobController");
const {verifyAndAuthorization,verifyToken,verifyAndAdmin} = require("../middleware/verifyToken")


//add a job
router.post("/",jobController.createJob);


//update job
router.put("/:id", verifyAndAdmin, jobController.updateJob);

//delete job
router.delete("/:id",verifyAndAdmin,jobController.deleteJob);

//get job
router.get("/:id",jobController.getJob);

//get all jobs
router.get("/",jobController.getAlljobs);

//search jobs
router.get("/search/:key",jobController.searchJobs);


module.exports = router