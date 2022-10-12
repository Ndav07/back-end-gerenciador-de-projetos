import { Project } from "@modules/projects/infra/typeorm/entities/Project";
import { Team } from "@modules/teams/infra/typeorm/entities/Team";

interface ICreateProjectDTO {
    name: string;
    team?: Team;
}

interface IEditProjectDTO {
    name: string;
    id: string;
    team?: Team;
}

interface IProjectsRepository {
    list(): Promise<Project[]>;
    listById(id: string): Promise<Project>;
    create(data: ICreateProjectDTO): Promise<void>;
    delete(id: string): Promise<void>;
    editProject(data: IEditProjectDTO): Promise<void>;
};

export { IProjectsRepository, ICreateProjectDTO, IEditProjectDTO };