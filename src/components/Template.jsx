import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

function Template() {
	return (
		<div>
			<Header />
			<div className="app-shell">
				<Sidebar />
				<main className="main">
					<Outlet />
				</main>
			</div>
		</div>
	)
}

export default Template

