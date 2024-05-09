import React from 'react'
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHouse, faMagnifyingGlass, faPaperPlane, faHeart, faSquarePlus} from "@fortawesome/free-solid-svg-icons"
import "./header.css"

function Header({children}) {
  return (

    <div id="viewport">
      {/* <!-- Sidebar --> */}
      <div id="sidebar">
      <header>
        <a href="#">Thread app</a>
      </header>
      <ul class="nav">
        <li>
          <NavLink >
            <FontAwesomeIcon icon={faHouse} size='lg'/>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink >
          <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' />
            search
          </NavLink>
        </li>

        <li>
          <NavLink >
          <FontAwesomeIcon icon={faPaperPlane} size='lg' />
            message
          </NavLink>
        </li>

        <li>
          <NavLink >
            <FontAwesomeIcon icon={faHeart} size='lg' />
            notification
          </NavLink>
        </li>

        <li>
          <NavLink >
          <FontAwesomeIcon icon={faSquarePlus} size='lg' />
            create
          </NavLink>
        </li>

        <li>
          <NavLink >
            <FontAwesomeIcon icon={faHouse} size='lg' />
            profile
          </NavLink>
        </li>
      </ul>
      </div>
      {/* <!-- Content --> */}
      <div id="content">
        {children}
      </div>
</div>
  )
}

export default Header
