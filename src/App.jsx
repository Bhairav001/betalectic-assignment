import React from "react"
import { Route, Routes } from "react-router-dom"
import Example from "./Example"
import SearchPackages from "./components/SearchPackages"
import Favorites from "./components/Favorites"


function App() {

  return (
    <Routes>
        <Route path="/" element={<SearchPackages/>} />
        <Route path="/favorites" element={<Favorites/>} />
    </Routes>
  )
}

export default App
