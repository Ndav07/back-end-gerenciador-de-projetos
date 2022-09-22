import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProjectsUseCase } from "./ListProjectsUseCase";

class ListProjectsCrontroller {
    async handle(req: Request, res: Response): Promise<Response> {
        const listProjectsUseCase = container.resolve(ListProjectsUseCase);
        const projects = await listProjectsUseCase.execute();
        return res.status(200).json(projects);
    }
};

export { ListProjectsCrontroller };