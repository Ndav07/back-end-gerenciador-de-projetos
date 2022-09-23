import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListContributorByIdTeamController } from "@modules/contributors/useCase/ListContributorsByIdTeam/ListContributorByIdTeamController";

const contributorsRoutes = Router();

const listProjectByIdCrontroller = new ListContributorByIdTeamController();

contributorsRoutes.use(ensureAuthenticated);

contributorsRoutes.get("/", listProjectByIdCrontroller.handle);

export { contributorsRoutes };