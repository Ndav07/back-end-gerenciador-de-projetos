import { inject, injectable } from "tsyringe";

import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

@injectable()
class EditTeamUseCase {
    constructor(@inject("TeamsRepository") private teamsRepository: ITeamsRepository) {}
    async execute(id: string, name: string): Promise<void> {
        await this.teamsRepository.editTeam(id, name);
    }
};

export { EditTeamUseCase };