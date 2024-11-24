import { BrowserRouter, Route, Routes } from "react-router-dom"
import { lazy, Suspense } from "react"

const Dashboard = lazy(() => import('./pages/Dashboard'))
const Transaction = lazy(() => import('./pages/Transaction'))
const Products = lazy(() => import('./pages/Products'))
const Customers = lazy(() => import('./pages/Customers'))

const App = () => {
  return (
  <Suspense fallback = {<div> Loading...</div>} >
    <BrowserRouter>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/Transaction" element={<Transaction />} />
        <Route path="/admin/Products" element={<Products />} />
        <Route path="/admin/Customers" element={<Customers />} />
      </Routes>
    </BrowserRouter>
  </Suspense>
  )
}

export default App