import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Team } from "../../../../teams/infra/typeorm/entities/Team";
import { Task } from "../../../../tasks/infra/typeorm/entities/Task";

@Entity('contributors')
class Contributor {
    @PrimaryColumn({ type: "uuid" })
    id?: string;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "varchar" })
    office: string;

    @Column({ type: "varchar", nullable: true })
    avatar?: string;

    @ManyToOne(() => Team, team => team.contributors, { cascade: true })
    team: Team;

    @OneToMany(() => Task, task => task.contributor, { nullable: true })
    tasks?: Task[];

    @CreateDateColumn({ type: "timestamp", default: "now()" })
    created_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuidV4();
        } 
    }
};

export { Contributor };