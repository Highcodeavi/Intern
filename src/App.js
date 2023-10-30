import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState([]);

  const fetchInfo = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }


  useEffect(() => {
    fetchInfo();
  }, []);

  function Userdetails(){
  }

  function removeData(id){
    const newData= data.filter(data =>data.id !== id);
    setData(newData);
  }

  return (
    <div className="App">
      <h1>Search People Using ID</h1>
      <div>
        <input placeholder="search"></input>
        <button><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
      <div className="cards" onClick={Userdetails}>
        {data.map((data) => {
          return (
            <div className="card">
              <p >Id:  {data.id}</p>
              <p >Name:   {data.name}</p>
              <p >Username:   {data.username}</p>
              <p >Email:   {data.email}</p>
              <p >Phone:   {data.phone}</p>
              <button onClick={()=> removeData(data.id)}>Remove</button>
              <button>Edit</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;