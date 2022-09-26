import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteProjectUseCase } from "./DeleteProjectUseCase";

class DeleteProjectController {
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const deleteProjectUseCase = container.resolve(DeleteProjectUseCase);
        await deleteProjectUseCase.execute(id);
        return res.status(200).send();
    }
}

export { DeleteProjectController };