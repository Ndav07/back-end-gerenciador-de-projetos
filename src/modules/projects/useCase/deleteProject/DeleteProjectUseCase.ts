import { inject, injectable } from "tsyringe";

import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";

@injectable()
class DeleteProjectUseCase {
    constructor(@inject("ProjectsRepository") private projectsRepository: IProjectsRepository) {}
    async execute(id: string): Promise<void> {
        await this.projectsRepository.delete(id);
    }
};

export { DeleteProjectUseCase }