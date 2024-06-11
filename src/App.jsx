import './App.css'
import "./Root.css"
import {useEffect, useState} from 'react'
import HomePage from './Pages/HomePage'
import ShowBookPage from './Pages/ShowBookPage'
import { Route, Routes } from 'react-router-dom'
import { ThemContext } from './Context/ThemContext'
import NavBar from './assets/Components/NavBar/NavBar'
import Footer from './assets/Components/Footer/Footer'
const getFromLocalStorage = ()=>{
  const value = localStorage.getItem("them")
  return value ? JSON.parse(value) : "light"
}
function App() {
  const [them, setthem] = useState(getFromLocalStorage) 
  useEffect(()=>{
    localStorage.setItem("them", JSON.stringify(them))
  },[them])
  return (
    <>
    <ThemContext.Provider value={them}>
    <NavBar click={()=>{
      setthem(them== "dark"? "light": "dark")
    }} menue={[{link:"Home", path:"/"}, {link:"News"},
    {link: "Promotion of the mount"}, {link:"Plublishs"}, 
    {link:"Subscribe to the newsletter"}]} mode="Dark mode"/>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/details/:bookId' element={<ShowBookPage/>} />
      </Routes>
      <Footer copyRight="© All copyrights are reserved. B-World 2022. "/>
      </ThemContext.Provider>
    </>
  )
}

export default App
