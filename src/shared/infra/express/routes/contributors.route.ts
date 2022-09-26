import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListContributorByIdTeamController } from "@modules/contributors/useCase/ListContributorsByIdTeam/ListContributorByIdTeamController";
import { CreateContributorController } from "@modules/contributors/useCase/createContributor/CreateContributorController";

const contributorsRoutes = Router();

const listContributorByIdTeamController = new ListContributorByIdTeamController();
const createContributorController = new CreateContributorController();

contributorsRoutes.use(ensureAuthenticated);

contributorsRoutes.get("/:id", listContributorByIdTeamController.handle);

contributorsRoutes.post("/", createContributorController.handle);



export { contributorsRoutes };