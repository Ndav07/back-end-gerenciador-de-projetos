import { DataSource, Repository } from "typeorm";

import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { Project } from "@modules/projects/infra/typeorm/entities/Project";
import { ICreateProjectDTO, IEditProjectDTO, IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";

class ProjectsRepository implements IProjectsRepository {
    private connectionDataBase: DataSource;
    private repository: Repository<Project>;

    constructor() {
        this.connectionDataBase = PostgresConnectDataBase;
        this.repository = this.connectionDataBase.getRepository(Project);
    };

    async list(): Promise<Project[]> {
        const projects = await this.repository.createQueryBuilder("projects").leftJoinAndSelect("projects.team", "team").leftJoinAndSelect("team.contributors", "contributors").leftJoinAndSelect("projects.tasks", "tasks").leftJoinAndSelect("tasks.contributor", "contributor").getMany();
        return projects;
    }

    async listById(id: string): Promise<Project> {
        const project = await this.repository.createQueryBuilder("projects").where("projects.id = :id", { id }).leftJoinAndSelect("projects.team", "team").getOne();
        return project;
    }

    async create({ name, team }: ICreateProjectDTO): Promise<void> {
        if(team) {
            const project = this.repository.create({ name: name, team: team });
            await this.repository.save(project);
        } else {
            const project = this.repository.create({ name: name });
            await this.repository.save(project);
        }
    }

    async delete(id: string): Promise<void> {
        await this.repository.createQueryBuilder("projects").delete().where("id = :id", { id }).execute();
    }

    async editProject({ name, id, team }: IEditProjectDTO): Promise<void> {
        if(team) {
            await this.repository.createQueryBuilder("projects").update().set({ name: name, team: team }).where("id = :id", { id }).execute();
        } else {
            await this.repository.createQueryBuilder("projects").update().set({ name: name, team: null }).where("id = :id", { id }).execute();
        } 
    }
}

export { ProjectsRepository };