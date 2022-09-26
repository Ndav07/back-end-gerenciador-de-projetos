import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTeamsUseCase } from "./ListTeamsUseCase";

class ListTeamsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listTeamsUseCase = container.resolve(ListTeamsUseCase);
        const teams = await listTeamsUseCase.execute();
        return res.status(200).json(teams);
    }
};

export { ListTeamsController };