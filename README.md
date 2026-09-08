# Invoice Management (Frontend)

This is a small React frontend for an invoice management UI built.

## Features

- Dashboard: shows total invoices, paid count, pending amount, and overdue count.
- Invoice Listing: table view with search, pagination, sorting, and filters (status, date range).
- Invoice Details: invoice summary, line items, and a Download / Print flow.
- Mock data: stored in `src/data/invoices.js`.

UI styling was implemented to follow a simple clean dashboard layout (sidebar, header, cards, table, badges).

## Tech

- React (Vite)
- react-router-dom for routing

## Project Structure (important files)

- `src/App.jsx` — app router and routes
- `src/components/Template.jsx` — main layout (Header + Sidebar + Outlet)
- `src/components/Header.jsx` — header bar
- `src/components/Sidebar.jsx` — navigation
- `src/components/Dashboard.jsx` — dashboard view
- `src/components/InvoiceListing.jsx` — all invoices page (search, filters, table)
- `src/components/InvoiceDetails.jsx` — invoice details and print
- `src/data/invoices.js` — mock invoice data
- `src/App.css` — app-wide styling (redesign applied here)

## Routes

- `/` or `/dashboard` — Dashboard
- `/invoices` — Invoice listing
- `/invoices/:id` — Invoice details

## Run locally

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open the URL shown by Vite (typically `http://localhost:5173`).

## Notes

- This README only documents the frontend demo. There is no backend — data comes from `src/data/invoices.js`.
- Styling changes were applied only to the CSS and component markup; no functional behavior was altered.

## Next steps (optional)

- Connect to a backend API for persistent data.
- Add create/edit invoice flows and validations.
- Improve responsive layout and accessibility.
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
