/** source/connection/connection.ts */
import { funcionario } from "../models/funcionario";
import { createConnection } from "typeorm"; //mysql teste


/* Comando */

//Teste 

export const connection = createConnection({
  type: "postgres" ,
  host: "localhost",
  port: 5432,
  username: "myuser",
  password: "mypass",
  database: "mydb",
  entities: [funcionario],
  synchronize: true,
  logging: false
});