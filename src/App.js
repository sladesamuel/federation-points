import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckAuth from "./components/CheckAuth"
import NotFound from "./components/NotFound"
import Login from "./components/Login"
import Home from "./components/Home"

const App = () => (
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route path="/" element={<CheckAuth />}>
        <Route index={true} element={<Home />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
)

export default App
