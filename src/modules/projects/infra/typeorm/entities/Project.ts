import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn, JoinColumn } from "typeorm";
import { Task } from "../../../../tasks/infra/typeorm/entities/Task";
import { Team } from "../../../../teams/infra/typeorm/entities/Team";

@Entity('projects')
class Project {
    @PrimaryColumn({ type: "uuid" })
    id?: string;

    @Column({ type: "varchar" })
    name: string;

    @OneToOne(() => Team, { nullable: true, onDelete: "SET NULL", cascade: true })
    @JoinColumn()
    team?: Team;

    @OneToMany(() => Task, tasks => tasks.project, { nullable: true })
    tasks?: Task[];

    @CreateDateColumn({ type: "timestamp", default: "now()" })
    created_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuidV4();
        } 
    }
};

export { Project };