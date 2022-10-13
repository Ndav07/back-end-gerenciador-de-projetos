import { inject, injectable } from "tsyringe";

import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

interface IRequest {
    name: string;
    id: string; 
    team?: string;
}

@injectable()
class EditProjectUseCase {
    constructor(@inject("ProjectsRepository") private projectsRepository: IProjectsRepository, @inject("TeamsRepository") private teamsRepository: ITeamsRepository) {}
    async execute({ name, id, team }: IRequest): Promise<void> {
        if(team) {
            const teamUser = await this.teamsRepository.listById(team);
            await this.projectsRepository.editProject({ name: name, id: id, team: teamUser });
        } else {
            await this.projectsRepository.editProject({ name: name, id: id });
        }
    }
};

export { EditProjectUseCase };