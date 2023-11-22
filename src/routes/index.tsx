import React, {lazy} from "react";
import {createBrowserRouter, Outlet} from "react-router-dom";
import {BaseLayout} from "../components";
import Home from "../page/home";
import {withSuspense} from "../hocs";

const Detail = withSuspense(lazy(async () => await import("../page/detail")));
export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <BaseLayout>
        <Outlet />
      </BaseLayout>
    ),
    // Define child routes here if any
    children: [
      {
        path: "/", // Root path for Home Page
        element: <Home />,
        index: true, // Marks this route as the index route
      },
      {
        path: "/:articleId", // Path for Detail Page
        element: <Detail />,
      },
    ],
  },
  // You can add more routes here
]);
