import { Route } from "react-router-dom"
import { Page } from "../components"

const renderRoute = ({ routes, element, ...props }) => {
  const { path } = props
  const childRoutes = routes || []

  return (
    <Route key={path} {...props} element={<Page>{element}</Page>}>
      {childRoutes.map(renderRoute)}
    </Route>
  )
}

export default renderRoute
