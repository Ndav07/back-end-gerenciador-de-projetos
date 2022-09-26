import { inject, injectable } from "tsyringe";

import { ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";

@injectable()
class DeleteTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository) {}
    async execute(id: string): Promise<void> {
        await this.tasksRepository.delete(id);
    }
};

export { DeleteTaskUseCase };