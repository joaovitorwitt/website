import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Newsletter from "./pages/Newsletter";
import ThankYou from "./pages/ThankYou";
import Projects from "./pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/articles",
    element: <Articles />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/articles/:articleId",
        element: <Article />,
      },
    ],
  },
  {
    path: "/newsletter",
    element: <Newsletter />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/thankyou",
    element: <ThankYou />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
