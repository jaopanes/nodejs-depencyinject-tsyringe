import { Router } from "express";
import { listUsersController } from "../config/containers";

const router = Router();

router.get("/user", listUsersController.execute);

export default router;
