import { inject, injectable } from "tsyringe";

import { Project } from "@modules/projects/infra/typeorm/entities/Project";
import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";

@injectable()
class ListProjectByIdUseCase {
    constructor(@inject("ProjectsRepository") private projectsRepository: IProjectsRepository) {}
    async execute(id: string): Promise<Project> {
        const project = await this.projectsRepository.listById(id);
        return project;
    }
};

export { ListProjectByIdUseCase };