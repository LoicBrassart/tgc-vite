import { createBrowserRouter } from "react-router-dom";
import RecentAds from "../pages/RecentAds";
import ErrorPage from "./ErrorPage";
import About from "../pages/About";
import AdDetail from "../pages/AdDetail";
import App from "../App";

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
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/ads/:id/:slug",
        element: <AdDetail />,
      },
    ],
  },
]);
export default router;
