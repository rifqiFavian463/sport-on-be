import { Router } from "express";
import { createTransaction, getTransactionById, getTransactions, updateTransaction } from "../controllers/transaction.controller.ts";
import { upload } from "../middlewares/upload.middleware.ts";
import { authenticate } from "../middlewares/auth.middleware.ts";

const router: Router = Router();

router.post("/checkout", upload.single("image"), createTransaction);
router.get("/", authenticate, getTransactions);
router.get("/:id", getTransactionById);
router.patch("/:id", authenticate, updateTransaction);

export default router;
