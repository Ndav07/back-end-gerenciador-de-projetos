import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListProjectsController } from "@modules/projects/useCase/listProjects/ListProjectsController";
import { ListProjectByIdController } from "@modules/projects/useCase/listProjectById/ListProjectByIdController";
import { CreateProjectController } from "@modules/projects/useCase/createProject/CreateProjectController";

const projectsRoutes = Router();

const listProjectsCrontroller = new ListProjectsController();
const listProjectByIdCrontroller = new ListProjectByIdController();
const createProjectCrontroller = new CreateProjectController();

projectsRoutes.use(ensureAuthenticated);

projectsRoutes.get("/", listProjectsCrontroller.handle);
projectsRoutes.get("/:id", listProjectByIdCrontroller.handle);

projectsRoutes.post("/", createProjectCrontroller.handle);

export { projectsRoutes };