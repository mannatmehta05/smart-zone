import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/landingPage";
export const routes = createBrowserRouter([
    {
        path: "/",
        element:  <LandingPage/>,
    }
]);