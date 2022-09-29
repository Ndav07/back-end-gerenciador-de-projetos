import { inject, injectable } from "tsyringe";

import { IEditTaskDTO, ITasksRepository } from "@modules/tasks/repositories/ITasksRepository";

@injectable()
class EditTaskUseCase {
    constructor(@inject("TasksRepository") private tasksRepository: ITasksRepository) {}
    async execute({ id, name, description, contributor }: IEditTaskDTO): Promise<void> {
        await this.tasksRepository.editTask({ id, name, description, contributor });
    }
};

export { EditTaskUseCase };