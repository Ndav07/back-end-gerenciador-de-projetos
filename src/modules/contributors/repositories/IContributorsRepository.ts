import { Contributor } from "../infra/typeorm/entities/Contributor";

interface CreateContributorDTO {
    name: string;
    office: string;
    team: string;
}

interface EditContributorDTO {
    id: string;
    name: string;
    office: string; 
    avatar?: string;
}

interface IContributorsRepository {
    listById(id: string): Promise<Contributor>;
    listByIdTeam(id: string): Promise<Contributor[]>;
    create(data: CreateContributorDTO): Promise<void>;
    delete(id: string): Promise<void>;
    editContributor(data: EditContributorDTO): Promise<void>;
    editContributorWithoutAvatar(data: EditContributorDTO): Promise<void>;
};

export { IContributorsRepository, CreateContributorDTO, EditContributorDTO };