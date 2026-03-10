import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Translate } from "./pages/Translate";
import { Budget } from "./pages/Budget";
import { Services } from "./pages/Services";
import { Profile } from "./pages/Profile";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { AuthCallback } from "./pages/AuthCallback";
import { AdminDashboard } from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/auth/callback",
    Component: AuthCallback,
  },
  {
    path: "/translate",
    Component: Translate,
  },
  {
    path: "/budget",
    Component: Budget,
  },
  {
    path: "/services",
    Component: Services,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
]);