const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyAndAuthorization,verifyToken,verifyAndAdmin} = require("../middleware/verifyToken")

// update

router.put("/", verifyAndAuthorization, userController.updateUser);
router.delete("/",verifyAndAuthorization,userController.deleteUser);
router.get("/",verifyAndAuthorization,userController.getUser);

//get all users
router.get("/",verifyAndAdmin,userController.getAllUser);


module.exports = router