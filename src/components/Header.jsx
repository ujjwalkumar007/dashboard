import React from 'react'
import "./Header.css"
import {BiDownArrow,BiUserCircle} from "react-icons/bi"
function Header() {
  return (
    <div className="shadow-md">
        <div className="header-wrapper text-white flex justify-between items-center">
            <a href="#" className="text-3xl">Sabertooth</a>
            <div className="user-dropdown flex items-center gap-2">
                <div className="user-avatar w-8 h-8  rounded-full flex items-center justify-center text-red-500 text-2xl"><BiUserCircle/></div>
                <p className="text-2xl">User Name</p>
                <button><BiDownArrow/></button>
            </div>
        </div>
    </div>
  )
}

export default Header