import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Cards from './Components/Cards'
import State from './Components/State'
import Effect from './Components/Effect'
import Navbar from './Components/Navbar'
import Reducer from './Components/Reducer'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter >
    <Navbar/>
      <Routes>
        <Route path="/" element={<State/>}></Route>
        <Route path="/effect" element={<Effect/>}></Route>
        <Route path="/reducer" element={<Reducer/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;




