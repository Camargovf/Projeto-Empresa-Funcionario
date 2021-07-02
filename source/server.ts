/** source/server.ts */
import http from 'http';
import { connection } from "./connection/connection"
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/posts';


import cors from "cors";
import { funcionario } from './models/funcionario';

// Setando rotas express

const router: Express = express();
const app=express()
app.use(cors())
app.use(express.json())
const server=app.listen(3000,()=>{
    console.log("Server express conferindo 3000....")
})
app.get("/api",(req,res)=>{
    res.send("API - Bem Vindo")
})
connection.then(
    async connection=>{
        console.log("Conectado Express teste 3000")
      
  const usersRepository = connection.getRepository(funcionario);

  app.get("/api/funcionario/:id",async(req,res)=>{

    /* Metodos */

    //METODO GET 

    const user = await usersRepository.findOne({where: { id: req.params.id }})
    res.json({
        message:"success",
        payload: user
    })
})

    //  METODO POST

app.post("/api/users",async (req,res)=>{
            
    console.log("body",req.body)
    const user = await usersRepository.create(req.body)
    const results = await usersRepository.save(user);
    
res.json({
message: "success",
payload: results
});
})

    // METODO DELETE

    app.delete("/api/users/:id",async(req,res)=>{
        const user = await usersRepository.delete(req.params.id)
        res.json({
            message:"success",
        })
    })

       
        //METODO PUT

    app.put("/api/users/:id",async(req,res)=>{
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


/** Conexao teste morgan */
router.use(morgan('dev'));
/** Parse the req */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

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

/** Routes */
router.use('/', routes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`Server testefake free api rodando em ${PORT}`));