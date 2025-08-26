import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/landingPage";
import TermsOfServices from "../pages/termsOfServices";
import PrivacyPolicy from "../pages/privacyPolicy";
import ContactUs from "../pages/conatctUs";
export const routes = createBrowserRouter([
    {
        path: "/",
        element:  <LandingPage/>,
    },
    {
        path: "/terms-of-service",
        element: <TermsOfServices/>,
    },
    {
        path: "/privacy-policy",
        element: <PrivacyPolicy/>,
    },
    {
        path:"/contact-us",
        element:<ContactUs/>
    }
]);