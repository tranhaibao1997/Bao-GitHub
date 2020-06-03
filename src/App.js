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
  let [reponsitory, setReponsitory] = useState(null)
  console.log(token)


  async function getAPIFromGit() {
    let url = `https://api.github.com/`
    let res = await Axios.get(url)
    console.log(res.data)
    setReponsitory(res.data.items)
  }
   function getGitTags(url) {
 console.log(url)
    
   
  }
 

  return (
    <>
      <Login setToken={setToken}></Login>
    
    </>
  );

}

export default App;
