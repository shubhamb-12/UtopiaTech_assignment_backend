import express from "express";
import userSignUp from "../controllers/signUpController";

const router = express.Router();

router.post("/signup", userSignUp);
// router.post("/login");

export default router;
