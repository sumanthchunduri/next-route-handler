// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser({ name, firstName, lastName, username }) {
  const newUser = await prisma.user.create({
    data: {
      name: name,
      firstName: firstName,
      lastName: lastName,
      username: username,
    }
  })
  
  const user = await prisma.user.findMany();
  // console.log(user);
  return user;
}


let db = [];


export default async function handler(req, res) {
  
  if(req.method === 'GET') {
    await getUser();
    res.status(200).json(db)
  }
  else if(req.method === 'POST') {
    const data = req.body;
    const userdat = await getUser(JSON.parse(data));
    // db.push(JSON.parse(data));
    // db.push(data);
    res.status(201).json(userdat);
  }

  // res.status(200).json({ name: 'John Doe' })
}
