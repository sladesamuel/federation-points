import { Login, CheckAuth, Home, NotFound } from "../components"

const routes = [
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/",
    element: <CheckAuth />,
    routes: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]

export default routes
