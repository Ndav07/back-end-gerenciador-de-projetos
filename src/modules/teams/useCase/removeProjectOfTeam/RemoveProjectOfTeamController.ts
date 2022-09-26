import { Request, Response } from "express";
import { container } from "tsyringe";

import { RemoveProjectOfTeamUseCase } from "./RemoveProjectOfTeamUseCase";

class RemoveProjectOfTeamController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        const removeProjectOfTeamUseCase = container.resolve(RemoveProjectOfTeamUseCase);
        await removeProjectOfTeamUseCase.execute(id);
        return res.status(200).send();
    }
};

export { RemoveProjectOfTeamController }