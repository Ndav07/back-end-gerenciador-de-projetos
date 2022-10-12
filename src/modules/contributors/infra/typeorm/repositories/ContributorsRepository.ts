import { DataSource, Repository } from "typeorm";

import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { Contributor } from "../entities/Contributor";
import { IContributorsRepository, ICreateContributorDTO, IEditContributorDTO } from "@modules/contributors/repositories/IContributorsRepository";

class ContributorsRepository implements IContributorsRepository {
    private connectionDataBase: DataSource;
    private repository: Repository<Contributor>;

    constructor() {
        this.connectionDataBase = PostgresConnectDataBase;
        this.repository = this.connectionDataBase.getRepository(Contributor);
    };

    async listById(id: string): Promise<Contributor> {
        const contributor = await this.repository.findOne({ where: {id: id} });
        return contributor;
    }

    async listByIdTeam(id: string): Promise<Contributor[]> {
        const contributors = await this.repository.createQueryBuilder("contributors").where("contributors.team = :id", { id }).getMany();
        return contributors;
    }

    async create({ name, office, team }: ICreateContributorDTO): Promise<void> {
        const contributor = this.repository.create({ name, office, team });
        await this.repository.save(contributor);
    }

    async delete(id: string): Promise<void> {
        await this.repository.createQueryBuilder("contributors").delete().where("id = :id", { id }).execute();
    }

    async editContributor({ id, name, office, avatar }: IEditContributorDTO): Promise<void> {
        await this.repository.createQueryBuilder("contributors").update().set({ name: name, office: office, avatar: avatar }).where("id = :id", { id }).execute();
    }

    async editContributorWithoutAvatar({ id, name, office }: IEditContributorDTO): Promise<void> {
        await this.repository.createQueryBuilder("contributors").update().set({ name: name, office: office }).where("id = :id", { id }).execute();
    }
};

export { ContributorsRepository };