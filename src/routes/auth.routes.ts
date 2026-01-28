import { Router } from "express";
import { signIn, initiateAdmin } from "../controllers/auth.controller.ts";

const router: Router = Router();

router.post("/signin", signIn);
router.post("/initiate-admin", initiateAdmin);

export default router;
