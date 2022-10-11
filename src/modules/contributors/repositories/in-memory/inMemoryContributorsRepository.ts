import { Contributor } from "@modules/contributors/infra/typeorm/entities/Contributor";
import { ICreateContributorDTO, IEditContributorDTO, IContributorsRepository } from "../IContributorsRepository";


class InMemoryContributorsRepository implements IContributorsRepository {
    contributors: Contributor[] = [];

    async listById(id: string): Promise<Contributor> {
        const contributor = this.contributors.find(contributors => contributors.id === id);
        return contributor;
    }

    async listByIdTeam(id: string): Promise<Contributor[]> {
        const contributors = this.contributors.filter(contributors => contributors.team.id === id);
        return contributors;
    }

    async create({ name, office, team }: ICreateContributorDTO): Promise<void> {
        const contributor = new Contributor();
        Object.assign(contributor, { name, office, team });
        this.contributors.push(contributor);
    }

    async delete(id: string): Promise<void> {
        this.contributors = this.contributors.filter(contributors => contributors.id !== id);
    }

    async editContributor({ id, name, office, avatar }: IEditContributorDTO): Promise<void> {
        this.contributors.map((contributors) => {
            if(contributors.id === id) {
                contributors.name = name;
                contributors.office = office;
                contributors.avatar = avatar;
            }
        });
    }

    editContributorWithoutAvatar(data: IEditContributorDTO): Promise<void> {
        throw new Error("Method not implemented.");
    }
};

export { InMemoryContributorsRepository };