import { Repository } from "typeorm";

import { Project } from "@modules/projects/infra/typeorm/entities/Project";
import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";

class ProjectsRepository implements IProjectsRepository {
    public repository: Repository<Project>;

    constructor() {
        const connectionDataBase = PostgresConnectDataBase;
        this.repository = connectionDataBase.getRepository(Project);
    };

    async list(): Promise<Project[]> {
        const projects = await this.repository.find();
        return projects;
    }
}

export { ProjectsRepository };