const middlewareController = require("../controllers/middlewareController");
const userController = require("../controllers/userController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndUserAuthorization,
} = require("../controllers/verifyToken");

const router = require("express").Router();
//GET ALL USERS
router.get("/", verifyToken, userController.getAllUsers);

//DELETE USER
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);

module.exports = router;