import { inject, injectable } from "tsyringe";

import { ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";

@injectable()
class RemoveContributorOfTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository) {}
    async execute(id: string): Promise<void> {
        await this.tasksRepository.removeContrbutorOfTask(id);
    }
};

export { RemoveContributorOfTaskUseCase };