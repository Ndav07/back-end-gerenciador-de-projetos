import { inject, injectable } from "tsyringe";

import { IProjectsRepository } from "@modules/projects/repositories/IProjectsRepository";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

interface IRequest {
    name: string;
    team: string;
};

@injectable()
class CreateProjectUseCase {
    constructor(@inject("ProjectsRepository") private projectsRepository: IProjectsRepository, @inject("TeamsRepository") private teamsRepository: ITeamsRepository) {}
    async execute({ name, team }: IRequest): Promise<void> {
        if(team) {
            const teamUser = await this.teamsRepository.listById(team);
            await this.projectsRepository.create({ name: name, team: teamUser });
        } else {
            await this.projectsRepository.create({ name: name });
        }
    }
};

export { CreateProjectUseCase };