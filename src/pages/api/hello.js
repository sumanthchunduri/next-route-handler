// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

let db = [];

export default async function handler(req, res) {
  
  if(req.method === 'GET') {
    res.status(200).json(db)
  }
  else if(req.method === 'POST') {
    const data = req.body;
    db.push(JSON.parse(data));
    // db.push(data);
    res.status(201).json(db);
  }

  // res.status(200).json({ name: 'John Doe' })
}
