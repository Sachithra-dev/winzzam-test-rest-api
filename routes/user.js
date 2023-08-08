const router = require("express").Router();
const userController = require("../controllers/userController");
const {verifyAndAuthorization,verifyToken,verifyAndAdmin} = require("../middleware/verifyToken")

// update

router.put("/:id", verifyAndAuthorization, userController.updateUser);
router.delete("/:id",verifyAndAuthorization,userController.deleteUser);
router.get("/:id",verifyAndAuthorization,userController.getUser);

//get all users
router.get("/",verifyAndAdmin,userController.getAllUser);


module.exports = router