import { DataSource, Repository } from "typeorm";

import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { ITasksRepository, ICreateTaskDTO } from "@modules/tasks/repositories/ITasksRepository";

class TasksRepository implements ITasksRepository {
    private connectionDataBase: DataSource;
    private repository: Repository<Task>;

    constructor() {
        this.connectionDataBase = PostgresConnectDataBase;
        this.repository = this.connectionDataBase.getRepository(Task);
    }

    async listByIdProject(id: string): Promise<Task[]> {
        const tasks = await this.repository.createQueryBuilder("tasks").where("tasks.project = :id", { id }).getMany();
        return tasks;
    }

    async create({ name, description, status, project, contributor }: ICreateTaskDTO): Promise<void> {
        const projectUse = await this.connectionDataBase.getRepository('projects').findOne({ where: {id: project} });
        const contributorUse = await this.connectionDataBase.getRepository('contributors').findOne({ where: {id: contributor} });
        const task = this.repository.create({ name, description, status, project: projectUse, contributor: contributorUse });
        await this.repository.save(task);
    }
};

export { TasksRepository };