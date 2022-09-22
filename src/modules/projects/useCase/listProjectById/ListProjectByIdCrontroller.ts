import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListProjectByIdUseCase } from "./ListProjectByIdUseCase";

class ListProjectByIdController {
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const listProjectIdUseCase = container.resolve(ListProjectByIdUseCase);
        const project = await listProjectIdUseCase.execute(id);
        return res.status(200).json(project);
    }
};

export { ListProjectByIdController };