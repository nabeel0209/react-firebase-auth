import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashoard";
import SignUpForm from "../Signup/Signup";
import SignInForm from "../Signin/SignIn";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <PublicRoute>
              <SignUpForm />
            </PublicRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="signin"
          element={
            <PublicRoute>
              <SignInForm />
            </PublicRoute>
          }
        />
      </Routes>
    </>
  );
}
