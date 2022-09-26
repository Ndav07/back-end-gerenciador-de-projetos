import { inject, injectable } from "tsyringe";

import { ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";

@injectable()
class EditTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository) {}
    async execute(id: string, name: string, description: string): Promise<void> {
        await this.tasksRepository.editTask(id, name, description);
    }
};

export { EditTaskUseCase };