import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header id="header">
        <h1><Link to={"/"}>Zinch</Link></h1>
        <nav id="nav">
            <ul>
                <li><Link to={'/'}><span className="glyphicon glyphicon-home"></span> Home</Link></li>
                <li><Link to={'/cart'}><span className="glyphicon glyphicon-shopping-cart"></span> MyCart</Link></li>
                <li><Link to={'/login'}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                <li><Link to={'/market'}><span className="glyphicon glyphicon-grain"></span>  Digital-Market</Link></li>
                <li title={'View our latest post'}><Link to={'/blog'}><span className="glyphicon glyphicon-comment"></span>  Our Blog</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
