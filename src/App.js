import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>
)

export default App
