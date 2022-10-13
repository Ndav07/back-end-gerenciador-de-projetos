import { InMemoryTasksRepository } from "@modules/tasks/repositories/in-memory/InMemoryTasksRepository";
import { EditStatusOfTaskUseCase } from "./EditStatusOfTaskUseCase";

describe("Edit status of task", () => {
    let inMemoryTasksRepository: InMemoryTasksRepository;
    let editStatusOfTaskUseCase: EditStatusOfTaskUseCase;

    beforeEach(() => {
        inMemoryTasksRepository = new InMemoryTasksRepository();
        editStatusOfTaskUseCase = new EditStatusOfTaskUseCase(inMemoryTasksRepository);
    });

    it("should be able to edit status of task", async () => {
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
        editStatusOfTaskUseCase.execute({ id: inMemoryTasksRepository.tasks[0].id, status: "New status of task"});
        const taskVerification = {
            id: inMemoryTasksRepository.tasks[0].id,
            name: "Name task", 
            description: "Description task", 
            status: "New status of task", 
            project: {
                id: "1",
                name: "Name Project"
            }
        }
        expect(inMemoryTasksRepository.tasks[0]).toEqual(taskVerification);
    })
})