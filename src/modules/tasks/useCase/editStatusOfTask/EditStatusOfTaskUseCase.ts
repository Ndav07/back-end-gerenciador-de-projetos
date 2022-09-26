import { inject, injectable } from "tsyringe";

import { ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";

@injectable()
class EditStatusOfTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository) {}
    async execute(id: string, status: string): Promise<void> {
        await this.tasksRepository.editStatusOfTask(id, status);
    }
};

export { EditStatusOfTaskUseCase }