import { inject, injectable } from "tsyringe";

import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

@injectable()
class EditProjectOfTeamUseCase {
    constructor(@inject("TeamsRepository") private teamsRepository: ITeamsRepository) {}
    async execute(idProject: string, idTeam: string): Promise<void> {
        await this.teamsRepository.editProjectOfTeam(idProject, idTeam);
    }
};

export { EditProjectOfTeamUseCase };