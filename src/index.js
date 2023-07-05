import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Root from "./Root";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsListPage from "./pages/NewsListPage";
import NewsPage from "./pages/NewsPage";

// createBrowserRouter: create route settings & Data API... etc
// RouterProvider: <RouterProvider> Component, put to the outmost layer of the react app
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/news",
        element: <NewsListPage />,
        loader: async () => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/`
          );
          const data = await response.json();

          return { news: data };
        },
      },
      {
        path: "/news/:id",
        element: <NewsPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.id}`
          );
          const data = await response.json();

          return {
            id: params.id,
            title: data.title,
            body: data.body,
          };
        },
      },
      {
        path: "/contact",
        element: <ContactPage />,
        action: async ({ request }) => {
          const formData = await request.formData();
          const fullname = formData.get("fullname");

          // Save the fullname to the database, and receive an ID

          return {
            id: 1000,
            fullname: fullname,
          };
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}></RouterProvider>);
