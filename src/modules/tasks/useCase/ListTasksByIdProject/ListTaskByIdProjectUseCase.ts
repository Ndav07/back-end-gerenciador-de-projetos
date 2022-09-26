import { inject, injectable } from "tsyringe";

import { Task } from "@modules/tasks/infra/typeorm/entities/Task";
import { ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";

@injectable()
class ListTaskByIdProjectUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository) {}
    async execute(id: string): Promise<Task[]> {
        const tasks = await this.tasksRepository.listByIdProject(id);
        return tasks;
    }
};

export { ListTaskByIdProjectUseCase };