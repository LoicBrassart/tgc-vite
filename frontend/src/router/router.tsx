import { createBrowserRouter } from "react-router-dom";
import RecentAds, { RecentAdsLoader } from "../pages/RecentAds";
import ErrorPage from "./ErrorPage";
import About from "../pages/About";
import AdDetail, { AdDetailLoader } from "../pages/AdDetail";
import App from "../App";
import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: true,
        element: <RecentAds />,
        loader: () => {
          return RecentAdsLoader();
        },
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/ads/:id/:slug",
        element: <AdDetail />,
        loader: ({ params }) => {
          return AdDetailLoader(params.id!);
        },
      },
    ],
  },
]);
export default router;
