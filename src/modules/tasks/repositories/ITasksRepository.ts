import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { Contributor } from "@modules/contributors/infra/typeorm/entities/Contributor";
import { Project } from "@modules/projects/infra/typeorm/entities/Project";

interface ICreateTaskDTO {
    name: string;
    description?: string;
    status: string;
    project: Project;
    contributor?: Contributor;
}

interface IEditTaskDTO {
    id: string;
    name?: string;
    status?: string;
    description?: string;
    contributor?: Contributor;
}

interface ITasksRepository {
    listByIdProject(id: string): Promise<Task[]>;
    create(data: ICreateTaskDTO): Promise<void>;
    delete(id: string): Promise<void>;
    editStatusOfTask(data: IEditTaskDTO): Promise<void>;
    editTask(data: IEditTaskDTO): Promise<void>;
};

export { ITasksRepository, ICreateTaskDTO, IEditTaskDTO };