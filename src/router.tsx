import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "pages/HomePage";
import DetailsPage from "pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/details/:listingId",
    element: <DetailsPage />,
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;