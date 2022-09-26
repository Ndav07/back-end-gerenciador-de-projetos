import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListTeamsWithoutProjectUseCase } from "./ListTeamsWithoutProjectUseCase";

class ListTeamsWithoutProjectController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listTeamsWithoutProjectUseCase = container.resolve(ListTeamsWithoutProjectUseCase);
        const teams = await listTeamsWithoutProjectUseCase.execute();
        return res.status(200).json(teams);
    }
};

export { ListTeamsWithoutProjectController };