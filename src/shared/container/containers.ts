import { container } from "tsyringe";

import { IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { UsersRepository } from "@modules/users/infra/typeorm/repositories/UsersRepository";

import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";
import { ProjectsRepository } from "@modules/projects/infra/typeorm/repositories/ProjectsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IProjectsRepository>(
    "ProjectsRepository",
    ProjectsRepository
);