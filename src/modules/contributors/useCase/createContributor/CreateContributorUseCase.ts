import { inject, injectable } from "tsyringe";

import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";
import { ITeamsRepository } from "@modules/teams/repositories/ITeamsRepository";

interface IRequest {
    name: string;
    office: string;
    team: string;
};

@injectable()
class CreateContributorUseCase {
    constructor(@inject("ContributorsRepository") private contributorsRepository: IContributorsRepository, @inject("TeamsRepository") private teamsRepository: ITeamsRepository) {}
    async execute({ name, office, team }: IRequest): Promise<void> {
        const teamUser = await this.teamsRepository.listById(team);
        await this.contributorsRepository.create({ name, office, team: teamUser });
    }
};

export { CreateContributorUseCase };