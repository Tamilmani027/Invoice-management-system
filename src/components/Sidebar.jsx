import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
	return (
		<aside className="sidebar">
			<h2>INVOICES</h2>
			<nav className="nav-list">
				<NavLink to="/dashboard" className={({isActive}) => `nav-link ${isActive? 'active':''}`} >Dashboard</NavLink>
				<NavLink to="/invoices" className={({isActive}) => `nav-link ${isActive? 'active':''}`} >All Invoices</NavLink>
			</nav>
		</aside>
	)
}

export default Sidebar