import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteTeamUseCase } from "./DeleteTeamUseCase";

class DeleteTeamController {
    async handle(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const deleteTeamUseCase = container.resolve(DeleteTeamUseCase);
        await deleteTeamUseCase.execute(id);
        return res.status(200).send();
    }
}

export { DeleteTeamController };