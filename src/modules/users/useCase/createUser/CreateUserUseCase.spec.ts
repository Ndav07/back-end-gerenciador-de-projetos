import { InMemoryUsersRepository } from "@modules/users/repositories/in-memory/InMemoryUsersRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { AppError } from "@shared/errors/AppError";
import { User } from "@modules/users/infra/typeorm/entities/User";

describe("Create User", () => {
    let inMemoryUsersRepository: InMemoryUsersRepository;
    let createUserUseCase: CreateUserUseCase;
    let user: User;

    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
        user = {
            email: "test@test.com", 
            password: "testeteste" 
        };
    });

    it("should be able to create new user", async () => {
        await createUserUseCase.execute(user);
        const userVerification = {
            id: inMemoryUsersRepository.users[0].id,
            email: "test@test.com",
            password: inMemoryUsersRepository.users[0].password
        };
        expect(inMemoryUsersRepository.users[0]).toEqual(userVerification);
    });

    it("should be not able to create new user, with password less than 6", () => {
        expect(async () => {
            await createUserUseCase.execute({ email: user.email, password: "teste" });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be not able to create new user, with password bigger then 45", () => {
        expect(async () => {
            await createUserUseCase.execute({ email: user.email, password: "0123456789012345678901234567890123456789012345" });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should be not able to create new user, with user exists", async () => {
        await createUserUseCase.execute(user);
        expect(async () => {
            await createUserUseCase.execute(user);
        }).rejects.toBeInstanceOf(AppError);
    });
});