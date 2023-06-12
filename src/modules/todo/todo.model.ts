import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserTable } from '../user/user.model';


@Entity()
export class TodoTable {

    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'todo_id',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
        type: 'varchar'
    })
    title: string;

    @Column({
        nullable: false,
        default: '',
        type: 'varchar'
    })
    description: string;

    @ManyToOne(() => UserTable, user => user.id) // Assuming User entity has a todos property
    @JoinColumn({ name: 'user_id' })
    user: UserTable;

}