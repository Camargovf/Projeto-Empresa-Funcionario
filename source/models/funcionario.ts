/** source/models/funcionario.ts */

/* Campos contém: funcionario nome, cpf, e-mail e endereço. */


import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class funcionario {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    email!: string;
    
    @Column()
    cpf!: string;

    @Column()
    endereco!: string;
}

