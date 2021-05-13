import React from 'react'
import { NavLink } from 'react-router-dom'
import Academics from './dashboardComp/Academics'
import Fee from './dashboardComp/Fee'
import Info from './dashboardComp/Info'

const DashboardNav = () => {
    return (
        <div>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/info">Info</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/Acadamics">Academics</NavLink>
                    </li>
                     <li className="nav-item">
                        <NavLink className="nav-link" to="/fees">Fee</NavLink>
                    </li>
                </ul>
        </div>
    )
}

export default DashboardNav
