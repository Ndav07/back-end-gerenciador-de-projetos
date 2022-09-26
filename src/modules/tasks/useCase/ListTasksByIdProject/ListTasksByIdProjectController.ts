import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTaskByIdProjectUseCase } from "./ListTaskByIdProjectUseCase";

class ListTaskByIdProjectController {
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const createTaskUseCase = container.resolve(ListTaskByIdProjectUseCase);
        const tasks = await createTaskUseCase.execute(id);
        return res.status(200).json(tasks);
    }
};

export { ListTaskByIdProjectController };