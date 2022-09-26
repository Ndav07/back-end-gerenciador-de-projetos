import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProjectUseCase } from "./CreateProjectUseCase";

class CreateProjectController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        const createProjectUseCase = container.resolve(CreateProjectUseCase);
        createProjectUseCase.execute(name);
        return res.status(200).send();
    }
};

export { CreateProjectController };