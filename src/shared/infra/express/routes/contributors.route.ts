import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListContributorByIdTeamController } from "@modules/contributors/useCase/listContributorsByIdTeam/ListContributorByIdTeamController";
import { CreateContributorController } from "@modules/contributors/useCase/createContributor/CreateContributorController";
import { EditContributorController } from "@modules/contributors/useCase/editContributor/EditContributorController";
import { DeleteContributorController } from "@modules/contributors/useCase/deleteContributor/DeleteContributorController";

const contributorsRoutes = Router();

const listContributorByIdTeamController = new ListContributorByIdTeamController();
const createContributorController = new CreateContributorController();
const editContributorController = new EditContributorController();
const deleteContributorController = new DeleteContributorController();

contributorsRoutes.use(ensureAuthenticated);

contributorsRoutes.get("/:id", listContributorByIdTeamController.handle);

contributorsRoutes.post("/", createContributorController.handle);

contributorsRoutes.put("/", editContributorController.handle);

contributorsRoutes.delete("/:id", deleteContributorController.handle);



export { contributorsRoutes };