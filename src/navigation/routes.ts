import { createBrowserRouter } from "react-router";
import { HomeScreen } from "../screens/HomeScreen";
import { TranslateScreen } from "../screens/TranslateScreen";
import { BudgetScreen } from "../screens/BudgetScreen";
import { ProfileScreen } from "../screens/ProfileScreen";
import { ServicesScreen } from "../screens/ServicesScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { SignUpScreen } from "../screens/SignUpScreen";
import { AuthCallbackScreen } from "../screens/AuthCallbackScreen";
import { AdminDashboardScreen } from "../screens/AdminDashboardScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeScreen,
  },
  {
    path: "/login",
    Component: LoginScreen,
  },
  {
    path: "/signup",
    Component: SignUpScreen,
  },
  {
    path: "/auth/callback",
    Component: AuthCallbackScreen,
  },
  {
    path: "/translate",
    Component: TranslateScreen,
  },
  {
    path: "/budget",
    Component: BudgetScreen,
  },
  {
    path: "/services",
    Component: ServicesScreen,
  },
  {
    path: "/profile",
    Component: ProfileScreen,
  },
  {
    path: "/admin",
    Component: AdminDashboardScreen,
  },
]);
