import {BrowserRouter, Routes, Route} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import UserDetail from "./components/UserDetail"
import Navbar from "./components/Navbar"
import './App.css'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  </BrowserRouter>
)

export default App