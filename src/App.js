import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckAuth from "./CheckAuth"
import NotFound from "./NotFound"
import Login from "./Login"
import Home from "./Home"

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
