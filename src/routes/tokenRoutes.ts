import express from "express";
import tokenRefresh from "../controllers/tokenController";

const router = express.Router();

router.post("/refresh", tokenRefresh);

export default router;
