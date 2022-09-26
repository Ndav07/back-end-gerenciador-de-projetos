import { Task } from "@modules/tasks/infra/typeorm/entities/Task";

interface ICreateTaskDTO {
    name: string;
    description?: string;
    status: string;
    project: string;
    contributor?: string;
}

interface ITasksRepository {
    listByIdProject(id: string): Promise<Task[]>;
    create(data: ICreateTaskDTO): Promise<void>;
};

export { ITasksRepository, ICreateTaskDTO };