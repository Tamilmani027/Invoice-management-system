import React from 'react'

function Header() {
	return (
		<div className="app-header">
			<div style={{display:'flex',alignItems:'center',gap:12}}>
				<div style={{width:36,height:36,borderRadius:8,background:'linear-gradient(90deg,#6b46ff,#5b33e6)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:700}}>I</div>
				<div className="brand">Invoice Management</div>
			</div>
		</div>
	)
}

export default Header

