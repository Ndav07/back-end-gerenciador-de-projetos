import { Team } from "../infra/typeorm/entities/Team";

interface ITeamsRepository {
    create(name: string): Promise<Team>;
    list(): Promise<Team[]>;
    listById(id: string): Promise<Team>;
    listTeamsWithoutProject(): Promise<Team[]>;
    delete(id: string): Promise<void>;
    editProjectOfTeam(idProject: string, idTeam: string): Promise<void>;
    editTeam(id: string, name: string): Promise<void>;
    removeProjectOfTeam(id: string): Promise<void>;
};

export { ITeamsRepository };