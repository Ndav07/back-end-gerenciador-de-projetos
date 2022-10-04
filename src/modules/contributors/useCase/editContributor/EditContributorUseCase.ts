import { inject, injectable } from "tsyringe";

import { IContributorsRepository } from "@modules/contributors/repositories/IContributorsRepository";
import { deleteFile } from "@utils/file";

@injectable()
class EditContributorUseCase {
    constructor(@inject("ContributorsRepository") private contributorsRepository: IContributorsRepository) {}
    async execute(id: string, name: string, office: string, avatar: string): Promise<void> {
        const user = await this.contributorsRepository.listById(id);
        if(user.avatar) {
            await deleteFile(`./tmp/avatar/${user.avatar}`);
        }
        await this.contributorsRepository.editContributor({ id, name, office, avatar });
    }
};

export { EditContributorUseCase };