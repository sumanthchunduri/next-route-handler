import React from "react";

export default function Home() {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [user, setUser] = React.useState([]);
  const [username, setUsername] = React.useState("");
  const [lastName, setLastname] = React.useState("");

  function sendRes() {
    async function send() {
      const data = await fetch("http://localhost:7000/posts", {
        method: "POST",
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify({
          title,
          content,
          userid: "FQqZ0jj3JgRKsBSKNMCFD",
        }),
      });
      const res = await data.json();
      setUser(res);
    }
    send();
  }

  function getRes() {
    async function response() {
      const data = await fetch("http://localhost:7000/posts");
      const res = await data.json();
      console.log(res);
      setUser(res);
    }
    response();
  }
  return (
    <>
      <input value={title} onChange={(e) => setTitle(e.target.value)} /> <br />
      <input
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />{" "}
      <br />
      <input
        value={lastName}
        onChange={(e) => setLastname(e.target.value)}
      />{" "}
      <br />
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <br />
      <button onClick={sendRes}>Send</button>
      <hr />
      <button onClick={getRes}>Get</button>
      {user.map((resp) => {
        return (
          <ul>
            <li>{resp.title}</li>
            <li>{resp.content}</li>
          </ul>
        );
      })}
    </>
  );
}
