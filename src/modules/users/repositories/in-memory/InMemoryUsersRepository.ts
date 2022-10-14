import { User } from "@modules/users/infra/typeorm/entities/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class InMemoryUsersRepository implements IUsersRepository {
    users: User[] = [];

    async create({ email, password }: ICreateUserDTO): Promise<void> {
        const user = new User();
        Object.assign(user, { email, password });
        this.users.push(user);
    }

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email);
        return user;
    }

    async findById(id: string): Promise<User> {
        const user = this.users.find(user => user.id === id);
        return user;
    }
};

export { InMemoryUsersRepository };