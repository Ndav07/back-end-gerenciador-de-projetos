import { Team } from "../infra/typeorm/entities/Team";

interface ITeamsRepository {
    create(name: string): Promise<Team>;
    list(): Promise<Team[]>;
};

export { ITeamsRepository };