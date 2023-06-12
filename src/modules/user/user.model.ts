import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserTable{

    @PrimaryGeneratedColumn({
        type:'bigint',
        name:'user_id',
    })
    id:number;

    @Column({
        nullable: false,
        type:'varchar',
        default: '',
    })
    fullName:string;

    @Column({
        nullable: false,
        default: '',
        type:'varchar',
    })
    password:string;

    @Column({
        nullable: false,
        default: 'user',
        type:'varchar',
    })
    role:string;

}