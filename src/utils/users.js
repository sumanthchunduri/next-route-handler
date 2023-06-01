import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser({id}) {
    
    const user = await prisma.user.findUnique({
        where: {
            id: id,
        }
    });
    // console.log(user);
    return user;
}

async function getUsers() {
    const users = await prisma.user.findMany();
    return users;
}

async function postUser({ name, firstName, lastName, username }) {
    const newUser = await prisma.user.create({
        data: {
          name: name,
          firstName: firstName,
          lastName: lastName,
          username: username,
        }
    })
    return newUser;
}

export { getUser, getUsers, postUser };