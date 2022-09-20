import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Project } from "../../../../projects/infra/typeorm/entities/Project";

@Entity('tasks')
class Task {
    @PrimaryColumn({ type: "uuid" })
    id?: string;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "varchar", nullable: true })
    description?: string;

    @Column({ type: "varchar" })
    status: string;

    @ManyToOne(() => Project, project => project.tasks, { cascade: true })
    project: Project;

    @CreateDateColumn({ type: "timestamp", default: "now()" })
    created_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuidV4();
        } 
    }
};

export { Task };