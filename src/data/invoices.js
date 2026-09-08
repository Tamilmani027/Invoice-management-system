const invoices = [
  {
    id: 'INV-1001',
    client: 'Acme Corp',
    date: '2026-08-01',
    dueDate: '2026-08-15',
    status: 'Paid',
    items: [
      { description: 'Design work', qty: 1, rate: 1200 },
      { description: 'Hosting (3 months)', qty: 3, rate: 20 },
    ],
  },
  {
    id: 'INV-1002',
    client: 'Beta LLC',
    date: '2026-08-10',
    dueDate: '2026-08-25',
    status: 'Pending',
    items: [
      { description: 'Development', qty: 10, rate: 80 },
    ],
  },
  {
    id: 'INV-1003',
    client: 'Gamma Inc',
    date: '2026-07-01',
    dueDate: '2026-07-15',
    status: 'Overdue',
    items: [
      { description: 'Consulting', qty: 5, rate: 150 },
    ],
  },
  {
    id: 'INV-1004',
    client: 'Delta Co',
    date: '2026-09-01',
    dueDate: '2026-09-30',
    status: 'Pending',
    items: [
      { description: 'Integration', qty: 3, rate: 200 },
    ],
  },
  {
    id: 'INV-1005',
    client: 'Epsilon Ltd',
    date: '2026-06-12',
    dueDate: '2026-06-26',
    status: 'Paid',
    items: [
      { description: 'Audit', qty: 2, rate: 500 },
    ],
  },
]

export default invoices
