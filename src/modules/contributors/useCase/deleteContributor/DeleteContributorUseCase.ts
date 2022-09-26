import { inject, injectable } from "tsyringe";

import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";

@injectable()
class DeleteContributorUseCase {
    constructor(@inject("ContributorsRepository") private contributorsRepository: IContributorsRepository) {}
    async execute(id: string): Promise<void> {
        await this.contributorsRepository.delete(id);
    }
};

export { DeleteContributorUseCase }