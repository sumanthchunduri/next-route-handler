// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getUsers, postUser } from "@/utils/users";
// let db = [];


export default async function handler(req, res) {
  
  if(req.method === 'GET') {
    await getUsers();
    res.status(200).json(db)
  }
  
  else if(req.method === 'POST') {
    const data = req.body;
    const userdat = await postUser(JSON.parse(data));
    // db.push(JSON.parse(data));
    // db.push(data);
    res.status(201).json(userdat);
  }

  // res.status(200).json({ name: 'John Doe' })
}
