import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import { ICreateUserDTO, IUsersRepository } from "@modules/users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
    constructor(@inject("UsersRepository") private usersRepository: IUsersRepository) {};
    async execute({ email, password }: ICreateUserDTO): Promise<void> {
        if(password.length < 6) {
            throw new AppError("Small password");
        }
        
        if(password.length > 45) {
            throw new AppError("Big password");
        }

        const userAlreadyEmailExists = await this.usersRepository.findByEmail(email);

        if(userAlreadyEmailExists) {
            throw new AppError("Email already exists");
        }
        
        const passwordHash = await hash(password, 8);
        await this.usersRepository.create({ email, password: passwordHash });
    }
};

export { CreateUserUseCase };