import{Router ,Request,Response}from 'express'
import * as userController from '../controllers/userController'

const router = Router();

router.post('/user/create',async (req,res)=>{
    try{
        const user = await userController.createUser(req.body);
        res.status(201).json(user);

    }catch(error){
        
        res.status(500).json({error:error})
    }
})

router.put('user/update/:id',async (req,res)=>{
    try{
        const user = await userController.updateUser(req.params.id,req.body);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({error:error})
    }
})

router.get('user/:id',async (req,res)=>{
    try{
        const user = await userController.getUserById(req.params.id);
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({error:error})
    }
})

router.get('/user/',async (req , res)=>{
    try{
        const user = await userController.getAllUsers();
        res.status(200).json(user)

    }catch(error){
        res.status(500).json({error})
    }
})

router.delete('/user/delete/:id',async (req , res)=>{
    try{
        const user = await userController.deleteUser(req.params.id);
        res.status(200).json(user)
    }catch(error){
        res.status(500).json({error})
    }
})


export default router