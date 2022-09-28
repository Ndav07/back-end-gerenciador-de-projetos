import { Request, Response } from "express";
import { container } from "tsyringe";

import { RemoveTeamOfProjectUseCase } from "./RemoveTeamOfProjectUseCase";

class RemoveTeamOfProjectController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.body;
        const removeTeamOfProjectUseCase = container.resolve(RemoveTeamOfProjectUseCase);
        await removeTeamOfProjectUseCase.execute(id);
        return res.status(200).send();
    }
};

export { RemoveTeamOfProjectController };