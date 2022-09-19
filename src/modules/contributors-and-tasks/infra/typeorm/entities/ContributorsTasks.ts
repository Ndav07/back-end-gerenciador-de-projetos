import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { Contributor } from "@modules/contributors/infra/typeorm/entities/Contributor";
import { Task } from "@modules/tasks/infra/typeorm/entities/Task";

@Entity('contributorstasks')
class ContributorsTasks {
    @PrimaryColumn({ type: "uuid" })
    id?: string;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "varchar", nullable: true })
    description?: string;

    @Column({ type: "varchar" })
    status: string;

    @OneToOne(() => Contributor, { nullable: true, cascade: true })
    @JoinColumn()
    contributor?: Contributor;

    @OneToOne(() => Task, { nullable: true, cascade: true })
    @JoinColumn()
    task?: Task;

    @CreateDateColumn({ type: "timestamp", default: "now()" })
    created_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuidV4();
        } 
    }
};

export { ContributorsTasks };