import { DataSource, Repository } from "typeorm";

import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { Project } from "@modules/projects/infra/typeorm/entities/Project";
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
        const project = await this.repository.findOneBy({ id });
        return project;
    }

    async create(name: string): Promise<void> {
        const project = this.repository.create({ name });
        await this.repository.save(project);
    }

    async delete(id: string): Promise<void> {
        await this.repository.createQueryBuilder("projects").delete().where("id = :id", { id }).execute();
    }
}

export { ProjectsRepository };