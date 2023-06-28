import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Housing from "./pages/Housing/Housing";
import About from "./pages/About/About";
import Error404 from "./pages/404/404";
import Layout from "./pages/Layout";
import './index.css';

const router = createBrowserRouter([
    {
        element: <Layout/>,
        errorElement: <Error404/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/logement/:id",
                element: <Housing/>
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router={router}/>
  </React.StrictMode>
);

