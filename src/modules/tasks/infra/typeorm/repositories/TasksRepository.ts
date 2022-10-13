import { DataSource, Repository } from "typeorm";

import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { ITasksRepository, ICreateTaskDTO, IEditTaskDTO } from "@modules/tasks/repositories/ITasksRepository";

class TasksRepository implements ITasksRepository {
    private connectionDataBase: DataSource;
    private repository: Repository<Task>;

    constructor() {
        this.connectionDataBase = PostgresConnectDataBase;
        this.repository = this.connectionDataBase.getRepository(Task);
    }

    async listByIdProject(id: string): Promise<Task[]> {
        const tasks = await this.repository.createQueryBuilder("tasks").orderBy("tasks.created_at").where("tasks.project = :id", { id }).getMany();
        return tasks;
    }

    async create({ name, description, status, project, contributor }: ICreateTaskDTO): Promise<void> {
        const task = this.repository.create({ name, description, status, project, contributor });
        await this.repository.save(task);
    }

    async delete(id: string): Promise<void> {
        await this.repository.createQueryBuilder("tasks").delete().where("id = :id", { id }).execute();
    }

    async editStatusOfTask({ id, status }: IEditTaskDTO): Promise<void> {
        await this.repository.createQueryBuilder("tasks").update().set({ status: status }).where("id = :id", { id }).execute();
    }

    async editTask({ id, name, description, contributor }: IEditTaskDTO): Promise<void> {
        if(contributor) {
            await this.repository.createQueryBuilder("tasks").update().set({ name, description, contributor }).where("id = :id", { id }).execute();
        } else {
            await this.repository.createQueryBuilder("tasks").update().set({ name, description, contributor: null }).where("id = :id", { id }).execute();
        }
    }
};

export { TasksRepository };