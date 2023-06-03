const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(cors());
app.use(json());

let users = [
  {
    id: "FQqZ0jj3JgRKsBSKNMCFD",
    firstName: "Ravi",
    lastName: "K",
    name: "Ravi K",
    username: "Ravi_k",
    posts: [
      {
        id: "EqtsWSmCe5bjn3Hl4atja",
      },
      {
        id: "Vq0h5Kwf3ce6iV9Cd4uc5",
      },
      {
        id: "aVItrk7BMdDn3LrW19d9H",
      },
    ],
  },
  {
    id: "4zKfRd7rKxlzOLWfPp0dE",
    firstName: "Ramesh",
    lastName: "N",
    name: "Ramesh N",
    username: "Ramesh_Dev",
    posts: [
      {
        id: "tNWht79l5vlbluy5Rorqa",
      },
      {
        id: "LLd12NHJn9rY68lBvDxFb",
      },
      {
        id: "wk5k3DgAMVr7Ysmbs4XAp",
      },
    ],
  },
];
let posts = [
  {
    id: "EqtsWSmCe5bjn3Hl4atja",
    userid: "FQqZ0jj3JgRKsBSKNMCFD",
    title: "First post",
    date: Date.now(),
    content: "Hey its about flex box, let dive in",
  },
  {
    id: "Vq0h5Kwf3ce6iV9Cd4uc5",
    userid: "FQqZ0jj3JgRKsBSKNMCFD",
    title: "First post",
    date: Date.now(),
    content: "Hey its about flex box, let dive in",
  },
  {
    id: "aVItrk7BMdDn3LrW19d9H",
    userid: "FQqZ0jj3JgRKsBSKNMCFD",
    title: "First post",
    date: Date.now(),
    content: "Hey its about flex box, let dive in",
  },
  {
    id: "tNWht79l5vlbluy5Rorqa",
    userid: "4zKfRd7rKxlzOLWfPp0dE",
    title: "First post",
    date: Date.now(),
    content: "Hey its about flex box, let dive in",
  },
  {
    id: "LLd12NHJn9rY68lBvDxFb",
    userid: "4zKfRd7rKxlzOLWfPp0dE",
    title: "First post",
    date: Date.now(),
    content: "Hey its about flex box, let dive in",
  },
  {
    id: "wk5k3DgAMVr7Ysmbs4XAp",
    userid: "4zKfRd7rKxlzOLWfPp0dE",
    title: "First post",
    date: Date.now(),
    content: "Hey its about flex box, let dive in",
  },
];
const PORT = 7000;

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users.filter((user) => id === user.id);
  res.json(user);
});

app.get("/users/:id/posts", (req, res) => {
  const id = req.params.id;
  const userPosts = posts.filter((post) => id === post.userid);
  res.json(userPosts);
});

app.get("/posts", (req, res) => {
  res.json(posts);
});

app.get("/posts/:id", (req, res) => {
  const id = req.params.id;
  const post = posts.filter((post) => id === post.id);
});

app.post("/posts", (req, res) => {
  // console.log(req);
  const { title, content, userid } = req.body;
  // console.log(req.body);
  const post = {
    id: uuidv4(),
    userid,
    title,
    date: Date.now(),
    content,
  };
  // console.log(title);
  // console.log(content);
  // console.log(userid);
  const user = users.filter((user) => userid === user.id);
  const newPost = {
    id: post.id,
  };
  // console.log(user);
  user[0].posts.push(newPost);
  posts.push(post);
  res.json(posts);
});

app.put("/posts/:id", (req, res) => {
  const { title, content, date, id, userid } = req.body;
  const post = posts.filter((post) => id !== post.id);
  const newPost = {
    id,
    userid,
    title,
    date,
    content,
  };
  post.push(newPost);
  posts = post;
  res.json(posts);
});
app.listen(PORT, console.log(`Server running on port ${PORT}`));
