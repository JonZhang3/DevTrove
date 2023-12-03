import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "@/layouts/Root";
import Libraries from "@/pages/Libraries";
import "@/styles";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Root />,
      children: [
        { path: "/", element: <Libraries /> },
        {
          path: "/tech-stack",
          element: <div className="text-center text-5">Comming soon!!!</div>,
        },
      ],
    },
  ],
  { basename: "/DevTrove" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
