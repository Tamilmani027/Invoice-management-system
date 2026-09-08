import React from 'react'
import invoices from '../data/invoices'

function Dashboard() {
	const total = invoices.length
	const paid = invoices.filter(i => i.status === 'Paid').length
	const overdue = invoices.filter(i => i.status === 'Overdue').length
	const pendingAmount = invoices
		.filter(i => i.status === 'Pending')
		.reduce((sum, inv) => sum + inv.items.reduce((s, it) => s + it.qty * it.rate, 0), 0)

	return (
		<div>
			<div className="page-title">Dashboard</div>
			<div className="cards" style={{marginTop:12}}>
				<div className="card">
					<div className="label">Total invoices</div>
					<div className="value">{total}</div>
				</div>
				<div className="card">
					<div className="label">Paid invoices</div>
					<div className="value">{paid}</div>
				</div>
				<div className="card">
					<div className="label">Pending amount</div>
					<div className="value">${pendingAmount.toFixed(2)}</div>
				</div>
				<div className="card">
					<div className="label">Overdue invoices</div>
					<div className="value">{overdue}</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
