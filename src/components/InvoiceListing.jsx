import React, { useMemo, useState } from 'react'
import invoicesData from '../data/invoices'
import { Link } from 'react-router-dom'

function InvoiceListing() {
	const [search, setSearch] = useState('')
	const [status, setStatus] = useState('All')
	const [startDate, setStartDate] = useState('')
	const [endDate, setEndDate] = useState('')
	const [sortKey, setSortKey] = useState('date')
	const [sortDir, setSortDir] = useState('desc')
	const [page, setPage] = useState(1)
	const pageSize = 5

	const filtered = useMemo(() => {
		let data = invoicesData.slice()
		if (search) {
			const q = search.toLowerCase()
			data = data.filter(i => i.id.toLowerCase().includes(q) || i.client.toLowerCase().includes(q))
		}
		if (status !== 'All') data = data.filter(i => i.status === status)
		if (startDate) data = data.filter(i => i.date >= startDate)
		if (endDate) data = data.filter(i => i.date <= endDate)

		data.sort((a, b) => {
			let av = a[sortKey]
			let bv = b[sortKey]
			if (sortKey === 'amount') {
				const sum = inv => inv.items.reduce((s, it) => s + it.qty * it.rate, 0)
				av = sum(a); bv = sum(b)
			}
			if (av < bv) return sortDir === 'asc' ? -1 : 1
			if (av > bv) return sortDir === 'asc' ? 1 : -1
			return 0
		})
		return data
	}, [search, status, startDate, endDate, sortKey, sortDir])

	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
	const pageData = filtered.slice((page - 1) * pageSize, page * pageSize)

	const toggleSort = key => {
		if (key === sortKey) setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))
		else { setSortKey(key); setSortDir('asc') }
	}

	return (
		<div>
			<div className="page-title">Invoices</div>

			<div className="filters">
				<input className="search-input" placeholder="Search by id or client" value={search} onChange={e=>{setSearch(e.target.value); setPage(1)}} />
				<select value={status} onChange={e=>{setStatus(e.target.value); setPage(1)}}>
					<option>All</option>
					<option>Paid</option>
					<option>Pending</option>
					<option>Overdue</option>
				</select>
				<label>From <input type="date" value={startDate} onChange={e=>{setStartDate(e.target.value); setPage(1)}} /></label>
				<label>To <input type="date" value={endDate} onChange={e=>{setEndDate(e.target.value); setPage(1)}} /></label>
			</div>

			<div className="table-card" style={{marginTop:12}}>
				<table className="invoices-table">
					<thead>
						<tr>
							<th onClick={()=>toggleSort('id')} style={{cursor:'pointer'}}>Invoice</th>
							<th onClick={()=>toggleSort('client')} style={{cursor:'pointer'}}>Client</th>
							<th onClick={()=>toggleSort('date')} style={{cursor:'pointer'}}>Date</th>
							<th>Due</th>
							<th onClick={()=>toggleSort('amount')} style={{textAlign:'right',cursor:'pointer'}}>Amount</th>
							<th>Status</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{pageData.map(inv => {
							const amount = inv.items.reduce((s, it)=>s+it.qty*it.rate,0)
							const stat = inv.status.toLowerCase()
							return (
								<tr key={inv.id}>
									<td><Link to={`/invoices/${encodeURIComponent(inv.id)}`}>{inv.id}</Link></td>
									<td>{inv.client}</td>
									<td>{inv.date}</td>
									<td>{inv.dueDate}</td>
									<td style={{textAlign: 'right'}}>${amount.toFixed(2)}</td>
									<td><span className={`badge ${stat}`}>{inv.status}</span></td>
									<td><Link to={`/invoices/${encodeURIComponent(inv.id)}`}>View</Link></td>
								</tr>
							)
						})}
					</tbody>
				</table>
			</div>

			<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12}}>
				<div>Showing {filtered.length} result(s)</div>
				<div style={{display: 'flex', gap: 8, alignItems: 'center'}}>
					<button className="btn" onClick={()=>setPage(p=>Math.max(1,p-1))} disabled={page===1}>Prev</button>
					<div>Page {page} / {totalPages}</div>
					<button className="btn" onClick={()=>setPage(p=>Math.min(totalPages,p+1))} disabled={page===totalPages}>Next</button>
				</div>
			</div>
		</div>
	)
}

export default InvoiceListing

