import { Project } from "@modules/projects/infra/typeorm/entities/Project";


interface IProjectsRepository {
    list(): Promise<Project[]>;
    listById(id: string): Promise<Project>;
};

export { IProjectsRepository };