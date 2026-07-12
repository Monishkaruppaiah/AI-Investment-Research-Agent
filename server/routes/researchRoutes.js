import express from "express";
import { researchCompany } from "../controllers/researchController.js";

const router = express.Router();

router.post("/", researchCompany);

export default router;