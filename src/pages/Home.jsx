import React from 'react'
import Sidebar from "../components/Sidebar"
import Main from "../components/Main"
import "./Home.css"
function Home() {
  return (
    <div className="home__screen">
        <Sidebar/>
        <Main/>
    </div>
  )
}

export default Home