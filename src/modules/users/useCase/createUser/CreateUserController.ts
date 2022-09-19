import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "@modules/users/useCase/createUser/CreateUserUseCase";

class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response>{
        const { password, email } = req.body;
        const createUserUseCase = container.resolve(CreateUserUseCase);
        await createUserUseCase.execute({ password, email });
        return res.status(201).send();
    }
};

export { CreateUserController };