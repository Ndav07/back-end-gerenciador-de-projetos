import { inject, injectable } from "tsyringe";

import { Team } from "@modules/teams/infra/typeorm/entities/Team";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

@injectable()
class ListTeamsUseCase {
    constructor(@inject("TeamsRepository") private teamRepository: ITeamsRepository) {}
    async execute(): Promise<Team[]> {
        const teams = this.teamRepository.list();
        return teams;
    }
};

export { ListTeamsUseCase };