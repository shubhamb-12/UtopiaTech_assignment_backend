import express from "express";
import userSignUp from "../controllers/signUpController";
import userLogin from "../controllers/loginController";
import deleteUser from "../controllers/deleteUserController";
import protect from "../Token_Validation/jwtValidation";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);
router.post("/delete/:id", protect, deleteUser);

export default router;
