import { inject, injectable } from "tsyringe";

import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";

interface IRequest {
    name: string;
    office: string;
    team: string;
}

@injectable()
class CreateContributorUseCase {
    constructor(@inject("ContributorsRepository") private contributorsRepository: IContributorsRepository) {}
    async execute({ name, office, team }: IRequest): Promise<void> {
        await this.contributorsRepository.create({ name, office, team });
    }
};

export { CreateContributorUseCase };