# Zorvyn Fintech Dashboard

Zorvyn is a modern **fintech dashboard UI** built with **React**, **Vite**, **Tailwind CSS**, and **React Router DOM**. It includes a premium landing page, mock authentication flow, dashboard analytics, transactions, insights, and card management screens.

This project is focused on building a clean and responsive frontend experience for a fintech platform.

---

## Features

- Premium black and blue fintech landing page
- Responsive design for desktop and mobile
- Mock Login and Signup pages
- Dashboard with:
  - Total balance
  - Income
  - Expenses
  - Savings
- Transactions page with mock transaction data
- Insights page with charts and category breakdown
- Card management UI
- Sidebar navigation for dashboard pages only
- Routing with React Router DOM

---

## Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**
- **Lucide React**
- **Recharts**

---

## Project Flow

### 1. Landing Page (`/`)
The user first lands on the Zorvyn homepage.

This page includes:
- navbar
- hero section
- call-to-action buttons
- fintech-style preview UI

From here, the user can go to:
- `/login`
- `/signup`

---

### 2. Login Page (`/login`)
This is a mock login page.

- User enters email and password (As of now you can enter as email and password to login)
- On submit, the app redirects to `/dashboard`

There is no real backend auth yet.  
This is only frontend navigation for now.

---

### 3. Signup Page (`/signup`)
This is a mock signup page.

- User enters name, email, and password (you can enter anything as of now)
- On submit, the app redirects to `/dashboard`

Again, this is mock authentication flow only.

---

### 4. Dashboard (`/dashboard`)
After login/signup, the user reaches the dashboard.

The dashboard contains:
- stats cards
- activity chart
- expense breakdown chart
- payment card UI
- recent transactions section

This acts as the main overview page of the fintech app.

---

### 5. Transactions (`/transactions`)
This page shows all transactions using mock data.

It supports:
- listing transactions
- search
- sort/filter UI structure

This page is useful for viewing detailed financial activity.

---

### 6. Insights (`/insights`)
This page gives a financial overview based on mock transaction data.

It includes:
- highest spending category
- month-over-month expense changes
- savings rate
- monthly overview chart
- spending by category

---

### 7. Cards Page (`/cards`) 
This page displays card designs and card details like:
- credit limit
- amount used
- available balance
- utilization

---

## Navigation Structure

### Public Routes
These pages do **not** show the sidebar:
- `/`
- `/login`
- `/signup`

### Dashboard Routes
These pages **do** show the sidebar:
- `/dashboard`
- `/transactions`
- `/insights`
- `/cards` 

---

## State Management

This project uses **React Context API + useReducer** for centralized state management.

### What is being managed
The shared application state currently includes:

- **Transactions data**
- **Transaction filters**
  - search
  - type
  - sort option

This was done because multiple parts of the app rely on the same financial data, such as:

- Dashboard
- Recent Transactions
- Transactions page
- Insights page

Using centralized state ensures all these views consume the same source of truth and stay consistent.

### Why Context + useReducer?
I chose **Context API with useReducer** because:

- the app has shared data across multiple pages
- it avoids prop drilling
- it keeps state updates predictable
- it is lightweight and suitable for the current project size
- it is scalable enough for future additions like authentication, cards state, or user preferences

### Why not use Redux or Zustand?
For the current size of this project, Context + useReducer is sufficient and keeps the implementation simpler without adding unnecessary complexity.

---

## Why Role-Based Authentication Is Not Added

Role-based authentication was **not implemented** because the current project is a **frontend-focused mock fintech dashboard** and does not yet include a real backend authentication system.

At this stage, the app includes:

- mock login
- mock signup
- frontend routing
- dashboard UI
- transactions and insights using mock data

Since there is currently:

- no backend
- no real user session
- no protected API
- no admin/user permission flow in the product requirements

adding role-based authentication would have been artificial and not meaningful in the current version of the project.

### Current approach
Instead of forcing unused auth logic into the app, I focused on implementing the actual shared state the project already needs, such as transactions and filters.

### Future scalability
The current architecture is flexible enough to support role-based authentication later. If the project is extended with a backend, role-based auth can be added by expanding the centralized state to include:

- authenticated user
- user role
- access permissions
- protected routes
- role-based dashboard views

## Folder Structure

```bash
src/
│
├── components/
│   ├── Sidebar.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── Chart.jsx
│   ├── ExpensePieChart.jsx
│   ├── Card.jsx
│   └── RecentTransactions.jsx
│
│── context/
│     └──FinanceContext.jsx
│
├── pages/
│   ├── LandingPage.jsx
│   ├── Dashboard.jsx
│   ├── Transactions.jsx
│   ├── InsightsPage.jsx
│   └── CardsPage.jsx
│
├── data/
│   └── transactions.js
│
├── App.jsx
├── main.jsx
└── index.css
```
---

## How to Clone and Use

### 1. Clone the repository
```bash
git clone https://github.com/your-username/zorvyn-fintech-dashboard.git
```

```bash
cd zorvyn/frontend
```

```bash
npm install
``` 

```bash
npm run dev
```

### Open http://localhost:5173 on your browser


