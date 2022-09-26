import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteContributorUseCase } from "./DeleteContributorUseCase";

class DeleteContributorController {
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const deleteContributorUseCase = container.resolve(DeleteContributorUseCase);
        await deleteContributorUseCase.execute(id);
        return res.status(200).send();
    }
}

export { DeleteContributorController };