import { InMemoryTasksRepository } from "@modules/tasks/repositories/in-memory/InMemoryTasksRepository";
import { ListTaskByIdProjectUseCase } from "./ListTaskByIdProjectUseCase";

describe("List tasks by ID project", () => {
    let inMemoryTasksRepository: InMemoryTasksRepository;
    let listTaskByIdProjectUseCase: ListTaskByIdProjectUseCase;

    beforeEach(() => {
        inMemoryTasksRepository = new InMemoryTasksRepository();
        listTaskByIdProjectUseCase = new ListTaskByIdProjectUseCase(inMemoryTasksRepository);
    });

    it("should be able to edit task", async () => {
        const tasks = [
            {
                name: "Name task", 
                description: "Description task", 
                status: "Status task", 
                project: {
                    id: "1",
                    name: "Name Project"
                },
            },
            {
                name: "Name task two", 
                description: "Description task two", 
                status: "Status task", 
                project: {
                    id: "1",
                    name: "Name Project"
                },
            },
            {
                name: "Name task three", 
                description: "Description task three", 
                status: "Status task", 
                project: {
                    id: "1",
                    name: "Name Project"
                },
            },
            {
                name: "Name task four", 
                description: "Description task four", 
                status: "Status task", 
                project: {
                    id: "2",
                    name: "Name Project"
                },
            }
        ];
        for(let j in tasks) {
            await inMemoryTasksRepository.create(tasks[j]);
        };
        const tasksList = await listTaskByIdProjectUseCase.execute("1");
        expect(tasksList.length = 3).toBeTruthy();
    });
});