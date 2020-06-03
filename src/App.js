import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Axios from 'axios';

function App() {
  useEffect(() => {
    getAPIFromGit()
  }, [])


  async function getAPIFromGit() {
    let url = `https://api.github.com/authorizations`
    let res = await Axios.get(url)
    console.log(res.data)
  }
  return (
    <>

    </>
  );
}

export default App;
