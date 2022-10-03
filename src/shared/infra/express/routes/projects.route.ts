import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListProjectsController } from "@modules/projects/useCase/listProjects/ListProjectsController";
import { ListProjectByIdController } from "@modules/projects/useCase/listProjectById/ListProjectByIdController";
import { CreateProjectController } from "@modules/projects/useCase/createProject/CreateProjectController";
import { EditProjectController } from "@modules/projects/useCase/editProject/EditProjectController";
import { EditTeamOfProjectController } from "@modules/projects/useCase/editTeamOfProject/EditTeamOfProjectController";
import { RemoveTeamOfProjectController } from "@modules/projects/useCase/removeTeamOfProject/RemoveTeamOfProjectController";
import { DeleteProjectController } from "@modules/projects/useCase/deleteProject/DeleteProjectController";

const projectsRoutes = Router();

const listProjectsCrontroller = new ListProjectsController();
const listProjectByIdCrontroller = new ListProjectByIdController();
const createProjectCrontroller = new CreateProjectController();
const editProjectController = new EditProjectController();
const editTeamOfProjectController = new EditTeamOfProjectController();
const removeTeamOfProjectController = new RemoveTeamOfProjectController();
const deleteProjectController = new DeleteProjectController();

projectsRoutes.use(ensureAuthenticated);

projectsRoutes.get("/", listProjectsCrontroller.handle);
projectsRoutes.get("/:id", listProjectByIdCrontroller.handle);

projectsRoutes.post("/", createProjectCrontroller.handle);

projectsRoutes.put("/", editProjectController.handle);
projectsRoutes.patch("/editTeam", editTeamOfProjectController.handle);
projectsRoutes.patch("/removeTeam", removeTeamOfProjectController.handle);

projectsRoutes.delete("/:id", deleteProjectController.handle);

export { projectsRoutes };