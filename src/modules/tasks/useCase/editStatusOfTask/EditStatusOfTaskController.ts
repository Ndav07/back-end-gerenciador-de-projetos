import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditStatusOfTaskUseCase } from "./EditStatusOfTaskUseCase";

class EditStatusOfTaskController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, status } = req.body;
        const editStatusOfTaskUseCase = container.resolve(EditStatusOfTaskUseCase);
        await editStatusOfTaskUseCase.execute({ id, status });
        return res.status(201).send();
    }
};

export { EditStatusOfTaskController };