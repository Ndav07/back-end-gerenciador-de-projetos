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
    delete(id: string): Promise<void>;
    editStatusOfTask(id: string, status: string): Promise<void>;
    editTask(id: string, name: string, description: string): Promise<void>;
    editContributorOfTask(idTask: string, idContributor: string): Promise<void>;
    removeContrbutorOfTask(id: string): Promise<void>;
};

export { ITasksRepository, ICreateTaskDTO };