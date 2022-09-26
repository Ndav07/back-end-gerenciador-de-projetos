import { inject, injectable } from "tsyringe";

import { ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";

@injectable()
class EditContributorOfTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository) {}
    async execute(idTask: string, idContributor: string): Promise<void> {
        await this.tasksRepository.editContributorOfTask(idTask, idContributor);
    }
};

export { EditContributorOfTaskUseCase };