import { Contributor } from "../infra/typeorm/entities/Contributor";

interface CreateContributorDTO {
    name: string;
    office: string;
    team: string;
}

interface IContributorsRepository {
    listByIdTeam(id: string): Promise<Contributor[]>;
    create(date: CreateContributorDTO): Promise<void>;
    delete(id: string): Promise<void>;
    editContributor(id: string, name: string, office: string, avatar: string): Promise<void>;
};

export { IContributorsRepository, CreateContributorDTO };