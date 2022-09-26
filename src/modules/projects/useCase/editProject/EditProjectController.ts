import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditProjectUseCase } from "./EditProjectUseCase";

class EditProjectController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, id } = req.body;
        const editProjectUseCase = container.resolve(EditProjectUseCase);
        editProjectUseCase.execute(name, id);
        return res.status(200).send();
    }
};

export { EditProjectController };