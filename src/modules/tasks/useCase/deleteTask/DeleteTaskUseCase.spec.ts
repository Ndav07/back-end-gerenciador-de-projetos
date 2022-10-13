import { InMemoryTasksRepository } from "@modules/tasks/repositories/in-memory/InMemoryTasksRepository";
import { DeleteTaskUseCase } from "./DeleteTaskUseCase";

describe("Delete task", () => {
    let inMemoryTasksRepository: InMemoryTasksRepository;
    let deleteTaskUseCase: DeleteTaskUseCase;

    beforeEach(() => {
        inMemoryTasksRepository = new InMemoryTasksRepository();
        deleteTaskUseCase = new DeleteTaskUseCase(inMemoryTasksRepository);
    });

    it("should be able to delete task", async () => {
        const task = {
            name: "Name task", 
            description: "Description task", 
            status: "Status task", 
            project: {
                id: "1",
                name: "Name Project"
            }
        }
        await inMemoryTasksRepository.create(task);
        deleteTaskUseCase.execute(inMemoryTasksRepository.tasks[0].id);
        expect(inMemoryTasksRepository.tasks.length > 0).toBeFalsy();
    })
})