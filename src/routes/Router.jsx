import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import HomePage from "../pages/HomePage";
import UserPrivate from "../private/UserPrivate";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: (
      <UserPrivate>
        <HomePage />
      </UserPrivate>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={myRoutes} />;
};

export default Router;
