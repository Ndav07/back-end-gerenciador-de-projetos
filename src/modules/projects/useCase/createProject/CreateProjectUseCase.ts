import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateProjectUseCase {
    constructor(@inject("ProjectsRepository") private projectsRepository: IProjectsRepository) {}
    async execute(name: string, idTeam: string): Promise<void> {
        await this.projectsRepository.create(name, idTeam);
    }
};

export { CreateProjectUseCase };