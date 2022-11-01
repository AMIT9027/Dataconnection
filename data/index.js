import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const dataUser = async() => {
    await prisma.user.findMany({
        where: {
            managerID: "" ////////as you want 
        },
    })

}
dataUser()


const location = async() => {
    const customer = await prisma.customers.findMany({
        where: {
            location: "london"
                ////////as you want
        },
    })

    const salePeople = await prisma.salePeople.findMany({
        where: {
            location: "london"
                ////////as you want
        },
    })
    console.log('====================================');
    console.log(salePeople, customers);
    console.log('====================================');

}

location()
const moreSalary = async() => {

    const user = await prisma.user.finadMany({
        where: {
            salary: ""
        } // average salaray over here


    })
    const dataset = user.filter((data) => { return data.salary > 25000 })
    console.log('====================================');
    console.log(dataset);
    console.log('====================================');
}
moreSalary()