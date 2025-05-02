import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import { DefaultLayout } from "./layout/default";
import DashboardHome from "./pages/dashboard/dashboardHome";
import LoginAs from "./pages/auth/loginAs";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { DoctorForm } from "./components/auth/patientAndDoctor";

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
      {
        path: "doctorForm",
        Component: DoctorForm,
      },
    ],
  },
]);

export default router;
