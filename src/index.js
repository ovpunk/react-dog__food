import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { App } from "./App";
import { SignIn } from "./pages/SignIn";
import { Products } from "./pages/Products";
import { SignUp } from "./pages/SignUp";
import { PersonalAccount } from "./pages/Account";
import { CurrentProduct } from "./pages/CurrentProduct";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <SignIn />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "account",
        element: <PersonalAccount />,
      },
      {
        path: "products/:idOfProduct",
        element: <CurrentProduct />,
      },
    ],
  },
]);
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
