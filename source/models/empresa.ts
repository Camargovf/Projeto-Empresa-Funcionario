/** source/models/empresa.ts */

/* Campos contém: * empresa nome, cnpj e endereço*/

import {Entity, Column, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class empresa {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    cnpj!: string;
    
    @Column()
    endereco!: string;
}

