import e from "express";

const {PrismaClient} = require ('@prisma/client')

const prisma = new PrismaClient();

async function main(){
    const newUser = await prisma.user.create({
        data: {
            email: 'example@example.com',
            password: '1234',
            name:'john',
            role:''
        }
    });
    console.log('novo usuário criado:',newUser)
}

main()
.catch(e =>{
    console.error(e);
    throw e;
})
.finally(async ()=>{
    await prisma.$disconnect();
})

