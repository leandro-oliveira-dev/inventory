import { Prisma,PrismaClient,user } from "@prisma/client";

const prisma = new PrismaClient();

interface CreateUserInput{
    id: string;
    email: string;
    password:string;
    name: string;
    role:string;
}  

interface updateUserInput{
    email?:string;
    password?:string;
    name?:string;
    role?:string;
}

export async  function createUser(data:CreateUserInput){

try{
    const user = await prisma.user.create({
        data,
    })

    return user

}catch(error){
    console.log(error)
    }
}

export async function updateUser(id:string,data :updateUserInput){
    try{
        const user = await prisma.user.update({
            where: { id },
            data
        })
        return user
    }catch(error){
        console.log(error)
    }

}

export async function getUserById(id:string){

    try{

        const user = await prisma.user.findUnique({
            where: { id },
        })
        return user
    }catch(error){

    }
}

export async function getAllUsers(){
    try{

        const user = await prisma.user.findMany()

        return user
    }catch(error){
        console.log(error)
    }
}

export async function deleteUser(id:string){

    try{
        const user = await prisma.user.delete({
            where: { id },
        })
        return user
    }catch(error){
        console.log(error)
    }


}