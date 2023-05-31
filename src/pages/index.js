import React from "react";

export default function Home() {
  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  const [user, setUser] = React.useState([]);


  function sendRes() {
    async function send() {
      const data = await fetch("http://localhost:3000/api/hello", {
        method: "POST",
        body: JSON.stringify({
          title: title,
          content: content,
        })
      })
    }
    send();
  }

  function getRes() {
    async function response() {
      const data = await fetch("http://localhost:3000/api/hello");
      const res = await data.json();
      console.log(res);
      setUser(res);
    }
    response();
  }
  return (
    <>
      <input value={title} onChange={(e)=>setTitle(e.target.value)} />
      <input value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={sendRes}>Send</button>
      <hr />
      <button onClick={getRes}>Get</button>
      {user.map((resp)=>{
          return (
            <ul>
            <li>{resp.title}</li>
            <li>{resp.content}</li>
            </ul>
          )
      })}
    </>
  )
}
