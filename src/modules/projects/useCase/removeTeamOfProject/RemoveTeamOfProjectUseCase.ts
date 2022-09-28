import { inject, injectable } from "tsyringe";

import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";

@injectable()
class RemoveTeamOfProjectUseCase {
    constructor(@inject("ProjectsRepository") private projectsRepository: IProjectsRepository) {}
    async execute(id: string): Promise<void> {
        await this.projectsRepository.removeTeamOfProject(id);
    }
};

export { RemoveTeamOfProjectUseCase };