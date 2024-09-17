import { Router,Request,Response } from "express";
import * as clientController from  '../controllers/clientController';
import { error } from "console";

const router = Router();

router.post('/client/create',async (req ,res)=>{
    try{
        const client = await clientController.createClient(req.body)
        res.status(200).json(client)

    }catch(error){
        res.status(500).json({error :error})
    }
})

router.put('/client/update/:id',async (req,res)=>{
    try{
        const client = await clientController.updateClient(req.params.id,req.body);
        res.status(200).json(client)
    }catch(error){
        res.status(500).json({error:error})
    }
})

router.get('/client/:id',async(req,res)=>{

    try{
        const client = await clientController.getClientById(req.params.id);
        res.status(200).json(client)
    }catch(error){
        res.status(500).json({error:error})
    }
})

router.get('/client/', async(req,res)=>{
    try{
        const client = await clientController.getAllClients();
        res.status(200).json(client)
    }catch(error){
        res.status(500).json({error:error})
    }
})

router.delete('/client/delete/:id', async(req,res)=>{
    try{
        const client = await clientController.deleteClient(req.params.id);
        res.status(200).json(client)
    }catch(error){
        res.status(500).json({error:error})
    }
})