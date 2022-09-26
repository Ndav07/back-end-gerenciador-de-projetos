import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListTaskByIdProjectController } from "@modules/tasks/useCase/ListTasksByIdProject/ListTasksByIdProjectController";
import { CreateTaskController } from "@modules/tasks/useCase/CreateTask/CreateTaskController";


const tasksRoutes = Router();

const listTaskByIdProjectController = new ListTaskByIdProjectController();
const createTaskController = new CreateTaskController();

tasksRoutes.use(ensureAuthenticated);

tasksRoutes.get("/:id", listTaskByIdProjectController.handle);

tasksRoutes.post("/", createTaskController.handle);

export { tasksRoutes };