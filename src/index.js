import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";
import App from './App';
import Home from "./pages/Home/Home";
import Housing from "./pages/Housing/Housing";
import About from "./pages/About/About";
import Error404 from "./pages/404/404";
import Root from "./pages/Root";

const router = createBrowserRouter([
    {
        element: <Root/>,
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

