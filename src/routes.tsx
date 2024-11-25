import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { routers } from "./common/Constants/routes";
import Loading from "./common/UI/Loading/Loading";

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
]);

export default router;
