import { Router } from "express";
import { authenticate } from "../middlewares/auth.middleware.ts";
import { createBank, deleteBank, getBanks, updateBank } from "../controllers/bank.controller.ts";

const router: Router = Router();

router.post("/", authenticate, createBank);
router.get("/", getBanks);
router.put("/:id", authenticate, updateBank);
router.delete("/:id", authenticate, deleteBank);

export default router;
