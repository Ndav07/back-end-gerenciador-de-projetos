import { Project } from "@modules/projects/infra/typeorm/entities/Project";

interface IProjectsRepository {
    list(): Promise<Project[]>;
    listById(id: string): Promise<Project>;
    create(name: string): Promise<void>;
    delete(id: string): Promise<void>;
    editProject(name: string, id: string): Promise<void>;
    editTeamOfProject(idProject: string, idTeam: string): Promise<void>;
    removeTeamOfProject(id: string): Promise<void>;
};

export { IProjectsRepository };