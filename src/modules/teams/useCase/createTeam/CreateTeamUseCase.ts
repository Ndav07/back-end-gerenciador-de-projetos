import { inject, injectable } from "tsyringe";

import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";
import { Team } from "@modules/teams/infra/typeorm/entities/Team";

@injectable()
class CreateTeamUseCase {
    constructor(@inject("TeamsRepository") private teamRepository: ITeamsRepository) {}
    async execute(name: string): Promise<Team> {
        const team = this.teamRepository.create(name);
        return team;
    };
};

export { CreateTeamUseCase };