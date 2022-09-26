import { inject, injectable } from "tsyringe";

import { Team } from "@modules/teams/infra/typeorm/entities/Team";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

@injectable()
class ListTeamByIdUseCase { 
    constructor(@inject("TeamsRepository") private teamsRepository: ITeamsRepository) {}
    async execute(id: string): Promise<Team> {
        const team = await this.teamsRepository.listById(id);
        return team;
    }
};

export { ListTeamByIdUseCase };