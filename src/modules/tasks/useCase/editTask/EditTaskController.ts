import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditTaskUseCase } from "./EditTaskUseCase";

class EditTaskController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, name, description } = req.body;
        const editTaskUseCase = container.resolve(EditTaskUseCase);
        await editTaskUseCase.execute(id, name, description);
        return res.status(200).send();
    }
};

export { EditTaskController };