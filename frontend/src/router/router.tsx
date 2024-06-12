import { createBrowserRouter } from "react-router-dom";
import RecentAds from "../components/RecentAds";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RecentAds />,
    errorElement: <ErrorPage />,
  },
]);
export default router;
