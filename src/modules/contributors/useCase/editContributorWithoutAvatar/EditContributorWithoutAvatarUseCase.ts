import { inject, injectable } from "tsyringe";

import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";

interface IRequest {
    id: string;
    name: string;
    office: string;
}

@injectable()
class EditContributorWithoutAvatarUseCase {
    constructor(@inject("ContributorsRepository") private contributorsRepository: IContributorsRepository) {}
    async execute({ id, name, office }: IRequest): Promise<void> {
        await this.contributorsRepository.editContributorWithoutAvatar({ id, name, office });
    }
}

export { EditContributorWithoutAvatarUseCase };