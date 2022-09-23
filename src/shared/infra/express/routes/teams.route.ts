import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { CreateTeamController } from "@modules/teams/useCase/createTeam/CreateTeamController";
import { ListTeamsController } from "@modules/teams/useCase/listTeams/ListTeamsController";

const teamsRoutes = Router();

const listTeamsController = new ListTeamsController();
const createTeamController = new CreateTeamController();

teamsRoutes.use(ensureAuthenticated);

teamsRoutes.get("/", listTeamsController.handle);

teamsRoutes.post("/", createTeamController.handle);

export { teamsRoutes };