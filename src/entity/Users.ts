import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string
    
    @Column()
    email: string
    
    @Column()
    password: string

    @Column({
    	default: false
    })
    activated: boolean

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date
}
