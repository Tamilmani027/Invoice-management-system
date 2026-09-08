import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Template from './components/Template'
import Dashboard from './components/Dashboard'
import InvoiceListing from './components/InvoiceListing'
import InvoiceDetails from './components/InvoiceDetails'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Template />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'invoices', element: <InvoiceListing /> },
        { path: 'invoices/:id', element: <InvoiceDetails /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default App
