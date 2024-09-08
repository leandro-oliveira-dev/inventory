import { Router,Request,response } from "express";
import * as stockController from '../controllers/stockController'
import { isErrored } from "stream";


interface CustomerError extends Error{
    code? : number;
}

const router = Router();

router.post('/stocks', async (req, res) => {
    try {

        const stock = await stockController.createStock(req.body);
        res.status(201).json(stock);

    }catch(error:unknown){

        res.status(500).json({error:error})

    }
})

router.put('/stocks/:id', async (req, res)=>{
    try {
        // const data:any = req.query
        const stock = await stockController.updateStock(req.params.id,req.body)
        res.status(200).json(stock)

    }catch(error){
        res.status(500).json({error:error})
    }
})

router.get('/stock/:id',async(req ,res)=>{
    try{
        const stock = await stockController.getStockById(req.params.id);

        if(stock){
            res.json(stock)
        }else{
            res.status(404).json({error:'not found'})
        }
    }catch(error){
        res.status(500).json({ error });
    }
})

router.get('/stocks',async(req , res)=> {
    try{
        const stock = await stockController.getAllStocks();
        res.json(stock);
    }catch(error){

     res.status(500).json({error});      
    }
})

router.delete('/stocks/:id',async (req ,res)=>{
    try{
        const stock = await stockController.deleteStock(req.params.id);
    }catch(error){
        res.status(500).json({error}); 
    }
})

export default router
