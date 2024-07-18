import Login from "../../auth/Login";
import Register from "../../auth/Register";

const publicRoutes = [
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
]

export default publicRoutes