import { Router } from "express";
import * as users from "../controllers/user.controller.ts";
import * as data from "../controllers/get.controllers.ts";
const router: Router = Router();

router.post("/create", users.createUser);
router.get("/users", users.getUser);
router.get("/data", data.getData);

export default router;
