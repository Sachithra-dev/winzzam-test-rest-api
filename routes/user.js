const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyAndAuthorization,verifyToken,verifyAndAdmin} = require("../middleware/verifyToken")

// update

router.put("/",verifyToken, userController.updateUser);
router.delete("/",verifyToken,userController.deleteUser);
router.get("/",verifyToken,userController.getUser);

//get all users
router.get("/",verifyAndAdmin,userController.getAllUser);


module.exports = router