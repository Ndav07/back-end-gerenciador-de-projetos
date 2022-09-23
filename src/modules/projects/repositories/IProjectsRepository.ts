import { Project } from "@modules/projects/infra/typeorm/entities/Project";

interface IProjectsRepository {
    list(): Promise<Project[]>;
    listById(id: string): Promise<Project>;
    create(name: string): Promise<void>;
};

export { IProjectsRepository };