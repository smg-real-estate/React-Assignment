import { BrowserRouter as ReactRouter, Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import DetailsPage from "./containers/DetailsPage";

const Router = () => (
  <ReactRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/details/:listingId" element={<DetailsPage />} />
    </Routes>
  </ReactRouter>
);

export default Router;
