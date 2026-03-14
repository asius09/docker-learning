import { Router } from "express";
import * as users from "../controllers/userController.js";

const router: Router = Router();

router.post("/create", users.createUser);
router.get("/users", users.getUser);

export default router;
