import { inject, injectable } from "tsyringe";

import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

@injectable()
class DeleteTeamUseCase {
    constructor(@inject("TeamsRepository") private teamsRepository: ITeamsRepository) {}
    async execute(id: string): Promise<void> {
        await this.teamsRepository.delete(id);
    }
};

export { DeleteTeamUseCase }