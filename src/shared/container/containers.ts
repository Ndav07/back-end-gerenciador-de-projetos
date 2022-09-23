import { container } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";

import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";
import { ProjectsRepository } from "@modules/projects/infra/typeorm/repositories/ProjectsRepository";

import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";
import { ContributorsRepository } from "@modules/contributors/infra/typeorm/repositories/ContributorsRepository";

import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { TeamsRepository } from "@modules/teams/infra/typeorm/repositories/TeamsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IProjectsRepository>(
    "ProjectsRepository",
    ProjectsRepository
);

container.registerSingleton<IContributorsRepository>(
    "ContributorsRepository",
    ContributorsRepository
);

container.registerSingleton<ITeamsRepository>(
    "TeamsRepository",
    TeamsRepository
)