import { User } from "@modules/users/infra/typeorm/entities/User";

interface ICreateUserDTO {
    id?: string;
    email: string;
    password: string;
};

interface IUsersRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
};

export { IUsersRepository, ICreateUserDTO };