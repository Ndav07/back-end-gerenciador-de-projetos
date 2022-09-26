import { inject, injectable } from "tsyringe";

import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";

@injectable()
class EditContributorUseCase {
    constructor(@inject("ContributorsRepository") private contributorsRepository: IContributorsRepository) {}
    async execute(id: string, name: string, office: string, avatar: string): Promise<void> {
        await this.contributorsRepository.editContributor(id, name, office, avatar);
    }
};

export { EditContributorUseCase };