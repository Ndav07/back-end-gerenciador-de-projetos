import { Contributor } from "../infra/typeorm/entities/Contributor";

interface ICreateContributorDTO {
    name: string;
    office: string;
    team: string;
}

interface IEditContributorDTO {
    id: string;
    name: string;
    office: string; 
    avatar: string;
}

interface IContributorsRepository {
    listById(id: string): Promise<Contributor>;
    listByIdTeam(id: string): Promise<Contributor[]>;
    create(data: ICreateContributorDTO): Promise<void>;
    delete(id: string): Promise<void>;
    editContributor(data: IEditContributorDTO): Promise<void>;
    editContributorWithoutAvatar(data: IEditContributorDTO): Promise<void>;
};

export { IContributorsRepository, ICreateContributorDTO, IEditContributorDTO };