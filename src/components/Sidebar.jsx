import React from 'react'
import "./Sidebar.css"
import {FiHome} from "react-icons/fi"
import {IoIosBrowsers} from "react-icons/io"
import {BsGear} from "react-icons/bs"
import {BiHelpCircle} from "react-icons/bi"
function Sidebar() {
  return (
    <div className="sidebar bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
        <div className="sidebar-nav py-12 flex justify-center">
            <ul className="flex flex-col gap-6 text-white">
                <li><a href="#"><FiHome/></a></li>
                <li><a href="#"><IoIosBrowsers/></a></li>
                <li><a href="#"><BsGear/></a></li>
                <li><a href="#"><BiHelpCircle/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar