import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListTaskByIdProjectController } from "@modules/tasks/useCase/ListTasksByIdProject/ListTasksByIdProjectController";
import { CreateTaskController } from "@modules/tasks/useCase/CreateTask/CreateTaskController";
import { EditStatusOfTaskController } from "@modules/tasks/useCase/editStatusOfTask/EditStatusOfTaskController";
import { EditTaskController } from "@modules/tasks/useCase/editTask/EditTaskController";
import { EditContributorOfTaskController } from "@modules/tasks/useCase/editContributorOfTask/EditContributorOfTaskController";
import { RemoveContributorOfTaskController } from "@modules/tasks/useCase/removeContributorOfTask/RemoveContributorOfTaskController";
import { DeleteTaskController } from "@modules/tasks/useCase/deleteTask/DeleteTaskController";

const tasksRoutes = Router();

const listTaskByIdProjectController = new ListTaskByIdProjectController();
const createTaskController = new CreateTaskController();
const editStatusOfTaskController = new EditStatusOfTaskController();
const editTask = new EditTaskController();
const editContributorOfTaskController = new EditContributorOfTaskController();
const removeContributorOfTaskController = new RemoveContributorOfTaskController();
const deleteTaskController = new DeleteTaskController();

tasksRoutes.use(ensureAuthenticated);

tasksRoutes.get("/:id", listTaskByIdProjectController.handle);

tasksRoutes.post("/", createTaskController.handle);

tasksRoutes.patch("/", editStatusOfTaskController.handle);
tasksRoutes.patch("/editContributor", editContributorOfTaskController.handle);
tasksRoutes.patch("/removeContributor", removeContributorOfTaskController.handle);
tasksRoutes.put("/", editTask.handle);

tasksRoutes.delete("/:id", deleteTaskController.handle);

export { tasksRoutes };