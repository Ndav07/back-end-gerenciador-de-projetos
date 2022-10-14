import { InMemoryUsersRepository } from "@modules/users/repositories/in-memory/InMemoryUsersRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { CreateUserUseCase } from "@modules/users/useCase/createUser/CreateUserUseCase";
import { User } from "@modules/users/infra/typeorm/entities/User";
import { AppError } from "@shared/errors/AppError";

describe("Authenticate User", () => {
    let inMemoryUsersRepository: InMemoryUsersRepository;
    let authenticateUserUseCase: AuthenticateUserUseCase;
    let createUserUseCase : CreateUserUseCase;
    let user : User;

    beforeEach(() => {
        inMemoryUsersRepository = new InMemoryUsersRepository();
        authenticateUserUseCase = new AuthenticateUserUseCase(inMemoryUsersRepository);
        createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
        user = {
            email: "test@test.com", 
            password: "testeteste" 
        };
    });

    it("should be able to authenticate an user", async () => {
        await createUserUseCase.execute(user);
        const userAthenticate = await authenticateUserUseCase.execute(user);
        expect(userAthenticate).toHaveProperty("token");
    });

    it("should not be able to authenticate an no existent user", () => {
        expect(async () => {
            await authenticateUserUseCase.execute(user);
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate with incorrect email", async () => {
        await createUserUseCase.execute(user);
        expect(async () => {
            await authenticateUserUseCase.execute({ email: "fake@email.com", password: user.password });
        }).rejects.toBeInstanceOf(AppError);
    });

    it("should not be able to authenticate with incorrect passaword", async () => {
        await createUserUseCase.execute(user);
        expect(async () => {
            await authenticateUserUseCase.execute({ email: user.email, password: "fakepassword" });
        }).rejects.toBeInstanceOf(AppError);
    });

});