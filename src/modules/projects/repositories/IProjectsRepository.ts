import { Project } from "@modules/projects/infra/typeorm/entities/Project";


interface IProjectsRepository {
    list(): Promise<Project[]>;
};

export { IProjectsRepository };