import { inject, injectable } from "tsyringe";

import { ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";
import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";
import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";

interface IRequest {
    name: string;
    description?: string;
    status: string; 
    project: string;
    contributor?: string;
}

@injectable()
class CreateTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository, @inject("ProjectsRepository") private projectsRepository: IProjectsRepository, @inject("ContributorsRepository") private contributorsRepository: IContributorsRepository) {}
    async execute({ name, description, status, project, contributor }: IRequest): Promise<void> {
        const projectUser = await this.projectsRepository.listById(project);
        if(contributor) {
            const contributorUser = await this.contributorsRepository.listById(contributor);
            await this.tasksRepository.create({ name, description, status, project: projectUser, contributor: contributorUser });
        } else {
            await this.tasksRepository.create({ name, description, status, project: projectUser });
        }
    }
};

export { CreateTaskUseCase };