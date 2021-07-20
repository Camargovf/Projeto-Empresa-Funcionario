/** source/posts.ts */

import { connection } from "../connection/connection";
import express, { Express } from 'express';
import cors from "cors";
import { funcionario } from '../models/funcionario';


// Setando rotas express

const router: Express = express();
const app=express()
app.use(cors())
app.use(express.json())
const server=app.listen(5432,()=>{
    console.log("Server rodando... porta 5432 (controllers)....")
})
app.get("/api",(req,res)=>{
    res.send("API - Bem Vindo Postgresql ")
})
connection.then(
    async (connection: { getRepository: (models: any) => any; })=>{
        console.log("Conectado Postgresql 3001")
      

         /* Metodos */

    //METODO GET 
    
        // Get funcionario

  const usersRepository = connection.getRepository(funcionario);

  app.get("/api/funcionario/:id",async(req,res)=>{
         
    const user = await usersRepository.findOne({where: { id: req.params.id }})
    res.json({
        message:"success",
        payload: user
    })
})

    //  METODO POST

app.post("/api/funcionario",async (req,res)=>{
            
    console.log("body",req.body)
    const user = await usersRepository.create(req.body)
    const results = await usersRepository.save(user);
    
res.json({
message: "success",
payload: results
});
})

    // METODO DELETE

    app.delete("/api/funcionario/:id",async(req,res)=>{
        const user = await usersRepository.delete(req.params.id)
        res.json({
            message:"success",
        })
    })

       
     //METODO PUT

    app.put("/api/funcionario/:id",async(req,res)=>{
        const user: any = await usersRepository.findOne(req.params.id)
        usersRepository.merge(user, req.body);
        const result = await usersRepository.save(user);
        res.json({
            message:"success",
            payload:result
        })
  
    })
        
    
}
).catch(error=>{
    console.log(error)
    
})


/** Regras da API*/
router.use((req, res, next) => {
    // CORS 
    res.header('Access-Control-Allow-Origin', '*');
    // CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // CORS metodos
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});


/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

export function getPosts(arg0: string, getPosts: any) {
    throw new Error('Function not implemented.');
}

export function updatePost(arg0: string, updatePost: any) {
    throw new Error('Function not implemented.');
}

export function deletePost(arg0: string, deletePost: any) {
    throw new Error('Function not implemented.');
}

export function addPost(arg0: string, addPost: any) {
    throw new Error('Function not implemented.');
}

