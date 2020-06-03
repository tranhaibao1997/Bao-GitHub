import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';
import Login from './Login';

const clientId = "4c72bea4dbe62c9a14d5";
const secretKey = "48109067d7cc6615d113e882883f7f4050f25be9";
function App() {
  useEffect(() => {
    getAPIFromGit()
  }, [])
  let [token, setToken] = useState(null)
  let [reponsitory,setReponsitory]=useState(null)
  console.log(token)


  async function getAPIFromGit() {
    let url = `https://api.github.com/search/repositories?q="facebook/react"&page=1&per_page=20}`
    let res = await Axios.get(url)
    console.log(res.data)
    setReponsitory(res.data.items)
  }
    // async function sendToAPI() {
  //   const issue = { title: title, body: details };
  //   const url = `https://api.github.com/repos/${props.owner}/${props.repos}/issues`;
  //   const response = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //       Authorization: `token ${token}`
  //     },
  //     body: JSON.stringify(issue)
  //   });
  // }

  return (
    <>
      <Login setToken={setToken}></Login>
      {
        reponsitory ?reponsitory.map(elm=>{return(
          <div>
            <h1>{elm.name}</h1>
          </div>
        )})   :""
      }
    </>
  );

}

export default App;
