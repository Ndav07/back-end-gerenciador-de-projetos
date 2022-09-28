import { Router } from "express";

import { authenticateRoutes } from "./authenticate.route";

import { usersRouter } from "@shared/infra/express/routes/users.route";
import { projectsRoutes } from "./projects.route";
import { teamsRoutes } from "./teams.route";
import { contributorsRoutes } from "./contributors.route";
import { tasksRoutes } from "./tasks.route";

const router = Router();

//router.use(authenticateRoutes);

router.use("/users", usersRouter);
router.use("/projects", projectsRoutes);
router.use("/teams", teamsRoutes);
router.use("/contributors", contributorsRoutes);
router.use("/tasks", tasksRoutes);

export { router };