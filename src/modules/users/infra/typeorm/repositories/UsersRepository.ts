import { Repository } from "typeorm";

import { PostgresConnectDataBase } from "@shared/infra/typeorm/data-source";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository, ICreateUserDTO } from "@modules/users/repositories/IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository : Repository<User>;

    constructor() {
        const connectionDataBase = PostgresConnectDataBase;
        this.repository = connectionDataBase.getRepository(User);
    }

    async create({ id, email, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({ id, email, password });
        await this.repository.save(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ where: {email: email} });
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ 
            where: {id: id},
        });
        return user;
    }
};

export { UsersRepository };