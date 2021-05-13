import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {NavLink} from 'react-router-dom';
import logo from '../images/logo.png'
const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="#">
                    <img src={logo} alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                 </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                     <ul className="navbar-nav ml-auto">
                         <li className="nav-item">
                             <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                         </li>
                         <li className="nav-item">
                              <NavLink className="nav-link" to="/about">Dashboard</NavLink>
                          </li>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Queries</NavLink>
                         </li>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                         </li>
                         <li className="nav-item">
                            <NavLink className="nav-link" to="/signup">Registration</NavLink>
                         </li>
                     </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
