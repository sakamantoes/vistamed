import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import { DefaultLayout } from "./layout/default";
import DashboardHome from "./pages/dashboard/dashboardHome";
import LoginAs from "../loginAs";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DashboardLayout from "./layout/dashboard";
import AboutPage from "./pages/APT/aboutPage";
import Privacy from "./pages/APT/privacy";
import TermsCondition from "./pages/APT/termsCondition";
import BookAppointment from "./pages/bookAppointment/bookAppointment";

const router = createBrowserRouter([
  {
    path: "/",
    Component: DefaultLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
      {
        path: "terms-condition",
        Component: TermsCondition,
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
    path: "/book-Appointment",
    children: [
      {
        index: true,
        Component: BookAppointment,
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
