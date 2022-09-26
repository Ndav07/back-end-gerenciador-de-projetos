import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListTaskByIdProjectController } from "@modules/tasks/useCase/ListTasksByIdProject/ListTasksByIdProjectController";
import { CreateTaskController } from "@modules/tasks/useCase/CreateTask/CreateTaskController";
import { DeleteTaskController } from "@modules/tasks/useCase/deleteTask/DeleteTaskController";


const tasksRoutes = Router();

const listTaskByIdProjectController = new ListTaskByIdProjectController();
const createTaskController = new CreateTaskController();
const deleteTaskController = new DeleteTaskController();

tasksRoutes.use(ensureAuthenticated);

tasksRoutes.get("/:id", listTaskByIdProjectController.handle);

tasksRoutes.post("/", createTaskController.handle);

tasksRoutes.delete("/:id", deleteTaskController.handle);

export { tasksRoutes };