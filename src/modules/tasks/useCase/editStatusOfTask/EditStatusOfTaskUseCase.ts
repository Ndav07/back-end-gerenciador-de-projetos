import { inject, injectable } from "tsyringe";

import { ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";

interface IRequest {
    id: string;
    status: string;
}

@injectable()
class EditStatusOfTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository) {}
    async execute({ id, status }: IRequest): Promise<void> {
        await this.tasksRepository.editStatusOfTask({ id, status });
    }
};

export { EditStatusOfTaskUseCase }