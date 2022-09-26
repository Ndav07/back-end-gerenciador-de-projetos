import { inject, injectable } from "tsyringe";

import { Contributor } from "@modules/contributors/infra/typeorm/entities/Contributor";
import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";

@injectable()
class ListContributorByIdTeamUseCase {
    constructor(@inject("ContributorsRepository") private contributorsRepository: IContributorsRepository) {}
    async execute(id: string): Promise<Contributor[]> {
        const contributors = await this.contributorsRepository.listByIdTeam(id);
        return contributors;
    }
};

export { ListContributorByIdTeamUseCase };