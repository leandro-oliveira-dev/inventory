import { Prisma, PrismaClient, Stock } from "@prisma/client";
import { promises } from "dns";

const prisma = new PrismaClient();

//tipos interface

interface CreateStockInput{
    id : string;
    clienteId : string;
    position : string;
    productoId : string;
    quantity : number;
    status : string;
}

interface updateStockInput{
    position? : string;
    productoId?: string;
    quantity? :  number;
    status? :  string;

}

// salvar os registros de estoque

export async function createStock(data :CreateStockInput){
    try{
        const stock = await prisma.stock.create({
       data,
        })
        return stock;
    }catch (error){
        console.error(error);
    }
}

// atualizar  os registros de estoque

export async function updateStock(id:string,data:updateStockInput){

    try{
        const stock = await prisma.stock.update({
            where:{id},
            data,
        })
        return stock;
    }catch (error){
        console.error(error);
    }
}

//buscar por id

export async function getStockById(id:string){
    try{
        const stock = await prisma.stock.findUnique({
            where:{id},
        })

        return stock
    }catch (error){
        console.error(error)
    }
}





