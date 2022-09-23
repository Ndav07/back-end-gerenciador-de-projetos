import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateTeamUseCase } from "./CreateTeamUseCase";

class CreateTeamController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;
        const createTeamUseCase = container.resolve(CreateTeamUseCase);
        const teamId = await createTeamUseCase.execute(name);
        return res.status(200).json(teamId);
    };
};

export { CreateTeamController };