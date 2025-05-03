import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import { DefaultLayout } from "./layout/default";
import DashboardHome from "./pages/dashboard/dashboardHome";
import LoginAs from "./pages/auth/loginAs";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DashboardLayout from "./layout/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        index: true,
        Component: LoginAs,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default router;
