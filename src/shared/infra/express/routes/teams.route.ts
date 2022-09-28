import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

import { ListTeamsController } from "@modules/teams/useCase/listTeams/ListTeamsController";
import { ListTeamByIdController } from "@modules/teams/useCase/listTeamById/ListTeamByIdController";
import { ListTeamsWithoutProjectController } from "@modules/teams/useCase/listTeamsWithoutProject/ListTeamsWithoutProjectController";
import { CreateTeamController } from "@modules/teams/useCase/createTeam/CreateTeamController";
import { DeleteTeamController } from "@modules/teams/useCase/deleteTeam/DeleteTeamController";
import { EditTeamController } from "@modules/teams/useCase/editTeam/EditTeamController";

const teamsRoutes = Router();

const listTeamsController = new ListTeamsController();
const listTeamByIdController = new ListTeamByIdController();
const listTeamsWithoutProjectController = new ListTeamsWithoutProjectController();
const createTeamController = new CreateTeamController();
const editTeamController = new EditTeamController();
const deleteTeamController = new DeleteTeamController();

//teamsRoutes.use(ensureAuthenticated);

teamsRoutes.get("/", listTeamsController.handle);
teamsRoutes.get("/:id", listTeamByIdController.handle);
teamsRoutes.get("/without/project", listTeamsWithoutProjectController.handle);

teamsRoutes.post("/", createTeamController.handle);

teamsRoutes.patch("/", editTeamController.handle);

teamsRoutes.delete("/:id", deleteTeamController.handle);

export { teamsRoutes };