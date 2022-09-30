import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class EditProjectUseCase {
    constructor(@inject("ProjectsRepository") private projectsRepository: IProjectsRepository) {}
    async execute(name: string, id: string, team: string): Promise<void> {
        await this.projectsRepository.editProject(name, id, team);
    }
};

export { EditProjectUseCase };