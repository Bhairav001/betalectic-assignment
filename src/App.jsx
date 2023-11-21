import React from "react"
import { Route, Router, Routes } from "react-router-dom"
import Example from "./Example"
import SearchPackages from "./components/SearchPackages"
import Favorites from "./components/Favorites"


function App() {

  return (
    <Routes>
      {/* <Switch> */}
        <Route path="/" element={<SearchPackages/>} />
        <Route path="/favorites" element={<Favorites/>} />
      {/* </Switch> */}
    </Routes>
  )
}

export default App
