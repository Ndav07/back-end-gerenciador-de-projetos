import { Router } from "express";

import { usersRouter } from "@shared/infra/express/routes/users.route";
import { projectsRoutes } from "./projects.route";

const router = Router();

router.use("/users", usersRouter);
router.use("/projects", projectsRoutes);

export { router };