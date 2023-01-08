import React from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import  './App.css'
import Home from './Components/Home/Home'
import {useState , useEffect} from 'react'
import DotLoader from "react-spinners/DotLoader";

const App = () => {
  const [loading,setLoading] =useState([false]);
  useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
  setLoading(false)
  } , 3000)

} ,[])
  return (
    <>
    <BrowserRouter>
    {loading ? 
    <div className="loader">
    <DotLoader color={'#dcca87'}  size={90} speedMultiplier={1} />
    </div>:
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
}
    </BrowserRouter>
    
    
    </>
  )
}

export default App