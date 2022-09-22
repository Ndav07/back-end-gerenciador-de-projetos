import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListProjectsCrontroller } from "@modules/projects/useCase/listProjects/ListProjectsCrontroller";
import { ListProjectByIdController } from "@modules/projects/useCase/listProjectById/ListProjectByIdCrontroller";

const projectsRoutes = Router();

const listProjectsCrontroller = new ListProjectsCrontroller();
const listProjectByIdCrontroller = new ListProjectByIdController();

projectsRoutes.use(ensureAuthenticated);

projectsRoutes.get("/", listProjectsCrontroller.handle);
projectsRoutes.get("/:id", listProjectByIdCrontroller.handle);

export { projectsRoutes };