import { DataSource, Repository } from "typeorm";

import { Project } from "@modules/projects/infra/typeorm/entities/Project";
import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";

class ProjectsRepository implements IProjectsRepository {
    private connectionDataBase: DataSource;
    private repository: Repository<Project>;

    constructor() {
        this.connectionDataBase = PostgresConnectDataBase;
        this.repository = this.connectionDataBase.getRepository(Project);
    };

    async list(): Promise<Project[]> {
        const projects = await this.repository.find();
        return projects;
    }

    async listById(id: string): Promise<Project> {
        const project = await this.repository.findOneBy({ id: id });
        return project;
    }
}

export { ProjectsRepository };