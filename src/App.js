import { BrowserRouter as Router, Routes } from "react-router-dom"
import renderRoute from "./routes/renderRoute"
import routes from "./routes/routes"

const App = () => (
  <Router>
    <Routes>{routes.map(renderRoute)}</Routes>
  </Router>
)

export default App
