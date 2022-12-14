import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProjectUseCase } from "./CreateProjectUseCase";

class CreateProjectController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, team } = req.body;
        const createProjectUseCase = container.resolve(CreateProjectUseCase);
        createProjectUseCase.execute({ name, team });
        return res.status(201).send();
    }
};

export { CreateProjectController };