import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { routers } from "./common/Constants/routes";
import Loading from "./common/UI/Loading/Loading";
import Login from "./pages/auth/pages/Login/Login";
import Register from "./pages/auth/pages/Register/Register";
import Otp from "./pages/auth/pages/Otp/Otp";
import ForgotPassword from "./pages/auth/pages/Forgot/Forgot";

const Authentication = lazy(() => import("./pages/auth/Auth"));
const Dashboard = lazy(() => import("./pages/dashboard/dashboard"));
const NonAuth = lazy(() => import("./pages/NonAuth/NonAuth"));

const router = createBrowserRouter([
  {
    path: routers.dashboard,
    element: (
      <Suspense fallback={<Loading />}>
        <Dashboard />
      </Suspense>
    ),
    children: [],
  },
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <NonAuth />
      </Suspense>
    ),
    children: [],
  },
  {
    path: "*",
    element: <Navigate to={routers.dashboard} replace />,
  },
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <Authentication />
      </Suspense>
    ),
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "register",
        element: (
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "forgot",
        element: (
          <Suspense fallback={<Loading />}>
            <ForgotPassword />
          </Suspense>
        ),
      },
      {
        path: "otp/:id",
        element: (
          <Suspense fallback={<Loading />}>
            <Otp />
          </Suspense>
        ),
      },
      {
        path: "reset",
        element: (
          <Suspense fallback={<Loading />}>
            {/* <Reset /> */}
          </Suspense>
        ),
      },
      {
        path: "verify",
        element: (
          <Suspense fallback={<Loading />}>
            {/* <Verify /> */}
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
