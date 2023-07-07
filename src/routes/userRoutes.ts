import express from "express";
import userSignUp from "../controllers/signUpController";
import userLogin from "../controllers/loginController";

const router = express.Router();

router.post("/signup", userSignUp);
router.post("/login", userLogin);

export default router;
