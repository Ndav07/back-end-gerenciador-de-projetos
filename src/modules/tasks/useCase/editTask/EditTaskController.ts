import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditTaskUseCase } from "./EditTaskUseCase";

class EditTaskController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id, name, description, contributor } = req.body;
        const editTaskUseCase = container.resolve(EditTaskUseCase);
        await editTaskUseCase.execute({ id, name, description, contributor });
        return res.status(200).send();
    }
};

export { EditTaskController };