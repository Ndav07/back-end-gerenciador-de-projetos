import { inject, injectable } from "tsyringe";

import { ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";
import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";

interface IRequest {
    id: string;
    name: string;
    description: string;
    contributor?: string;
}

@injectable()
class EditTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository, @inject("ContributorsRepository") private contributorsRepository: IContributorsRepository) {}
    async execute({ id, name, description, contributor }: IRequest): Promise<void> {
        if(contributor) {
            const contributorUser = await this.contributorsRepository.listById(contributor);
            await this.tasksRepository.editTask({ id, name, description, contributor: contributorUser });
        } else {
            await this.tasksRepository.editTask({ id, name, description });
        }
    }
};

export { EditTaskUseCase };