import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTaskUseCase } from "./CreateTaskUseCase";

class CreateTaskController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description, status, project, contributor } = req.body;
        const createTaskUseCase = container.resolve(CreateTaskUseCase);
        await createTaskUseCase.execute({ name, description, status, project, contributor });
        return res.status(201).send();
    }
};

export { CreateTaskController };