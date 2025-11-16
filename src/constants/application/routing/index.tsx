import { createBrowserRouter } from "react-router-dom";

import { ErrorPage } from "@/components/pages/error";
import { HomePage } from "@/components/pages/home";
import { WelcomePage } from "@/components/pages/welcome";

import { PagePath } from "./paths";

export const ROUTS = createBrowserRouter([
  {
    path: PagePath.Home,
    element: <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PagePath.Welcome,
        element: <WelcomePage />,
      },
    ],
  },
]);
