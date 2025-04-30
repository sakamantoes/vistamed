import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import { DefaultLayout } from "./layout/default";
import AuthLayout from "./layout/authLayout";
import DashboardHome from "./pages/dashboard/dashboardHome";

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
  // {
  //   path: "/auth",
  //   children: [
  //     {
  //       index: true,
  //       Component: AuthIndex
  //     },
  //     {
  //       path: "login",
  //       Component: Home,
  //     },
  //   ],
  // },
  {
    path: "/dashboard",
    Component: AuthLayout,
    children: [{ index: true, Component: DashboardHome }],
  },
]);

export default router;
