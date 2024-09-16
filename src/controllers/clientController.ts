import {Prisma,PrismaClient,Client} from  '@prisma/client';

const prisma  = new PrismaClient();

interface CreateClientInput{
    id: string;
    name:string;
    email: string;
    phone: string;
}


interface updateClientInput{
    name?: string;
    email?:  string;
    phone?: string;
}


export async  function createClient(data :CreateClientInput){
    try{
        const client = await prisma.client.create({
            data
        })

        return client;

    }catch(error){
        console.log(error)
    }
}

export async function updateClient(id: string, data :updateClientInput){

    try{
        const client = await prisma.client.update({
            where:{id},
            data
        })
        return client;

    }catch(error){
        console.log(error)
    }
}

export async function getClientById(id:string){
    try{
        const client =  await prisma.client.findUnique({
            where:{id}
        })
        return client;
    }catch(error){
        console.log(error)
    }
}

export async function  getAllClients(){

    try{
        const client = await prisma.client.findMany();
        return client;

    }catch(error){
        console.log(error)
    }
}

export async function deleteClient(id:string){
    try{
        const client = await prisma.client.delete({
            where:{id}
        })
        return client
    }catch(error){
        console.log(error)
    }
}