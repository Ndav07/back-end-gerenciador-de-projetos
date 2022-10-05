import { inject, injectable } from "tsyringe";

import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";

@injectable()
class EditContributorWithoutAvatarUseCase {
    constructor(@inject("ContributorsRepository") private contributorsRepository: IContributorsRepository) {}
    async execute(id: string, name: string, office: string): Promise<void> {
        await this.contributorsRepository.editContributorWithoutAvatar({ id, name, office });
    }
}

export { EditContributorWithoutAvatarUseCase };