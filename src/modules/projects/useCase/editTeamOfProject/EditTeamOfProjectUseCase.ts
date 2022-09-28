import { inject, injectable } from "tsyringe";

import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";

@injectable()
class EditTeamOfProjectUseCase {
    constructor(@inject("ProjectsRepository") private projectsRepository: IProjectsRepository) {}
    async execute(idProject: string, idTeam: string): Promise<void> {
        await this.projectsRepository.editTeamOfProject(idProject, idTeam);
    }
};

export { EditTeamOfProjectUseCase };