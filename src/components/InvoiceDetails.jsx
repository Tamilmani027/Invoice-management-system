import React from 'react'
import { useParams } from 'react-router-dom'
import invoices from '../data/invoices'

function InvoiceDetails() {
	const { id } = useParams()
	const invoice = invoices.find(i => i.id === id)

	if (!invoice) return <div>Invoice not found</div>

	const amount = invoice.items.reduce((s, it) => s + it.qty * it.rate, 0)

	const handleDownload = () => {
		const w = window.open('', '_blank')
		if (!w) return
		const html = `
			<html>
			<head><title>${invoice.id}</title></head>
			<body>
				<h1>Invoice ${invoice.id}</h1>
				<div>Client: ${invoice.client}</div>
				<div>Date: ${invoice.date}</div>
				<div>Due: ${invoice.dueDate}</div>
				<hr />
				<table style="width:100%;border-collapse:collapse;">
					<thead><tr><th style="text-align:left">Description</th><th>Qty</th><th>Rate</th><th>Amount</th></tr></thead>
					<tbody>
						${invoice.items.map(it => `<tr><td>${it.description}</td><td style="text-align:center">${it.qty}</td><td style="text-align:right">$${it.rate.toFixed(2)}</td><td style="text-align:right">$${(it.qty*it.rate).toFixed(2)}</td></tr>`).join('')}
					</tbody>
				</table>
				<hr />
				<div style="text-align:right;font-weight:600">Total: $${amount.toFixed(2)}</div>
			</body>
			</html>
		`
		w.document.write(html)
		w.document.close()
		w.print()
	}

	return (
		<div>
			<div className="page-title">{invoice.id}</div>
			<div className="details-card" style={{marginTop:12,display:'flex',alignItems:'center',gap:12}}>
				<div>
					<div><strong>Client:</strong> {invoice.client}</div>
					<div><strong>Date:</strong> {invoice.date}</div>
					<div><strong>Due:</strong> {invoice.dueDate}</div>
					<div style={{marginTop:8}}><strong>Status:</strong> <span className={`badge ${invoice.status.toLowerCase()}`} style={{marginLeft:8}}>{invoice.status}</span></div>
				</div>
				<div className="right">
					<button className="btn" onClick={handleDownload}>Download / Print</button>
				</div>
			</div>

			<h3 style={{marginTop: 20}}>Line Items</h3>
			<div className="details-card">
				<table className="line-items">
					<thead>
						<tr>
							<th>Description</th>
							<th>Qty</th>
							<th style={{textAlign: 'right'}}>Rate</th>
							<th style={{textAlign: 'right'}}>Amount</th>
						</tr>
					</thead>
					<tbody>
						{invoice.items.map((it, idx) => (
							<tr key={idx}>
								<td>{it.description}</td>
								<td style={{textAlign: 'center'}}>{it.qty}</td>
								<td style={{textAlign: 'right'}}>${it.rate.toFixed(2)}</td>
								<td style={{textAlign: 'right'}}>${(it.qty * it.rate).toFixed(2)}</td>
							</tr>
						))}
					</tbody>
				</table>

				<div style={{textAlign:'right',marginTop:12,fontWeight:700}}>Total: ${amount.toFixed(2)}</div>
			</div>
		</div>
	)
}

export default InvoiceDetails
