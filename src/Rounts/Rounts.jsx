import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../assets/Layouts/Main";
import Dashboard from "../assets/Layouts/Dashboard";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[{
        path:"/",
        element:<Home></Home>
      }
      ]
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        childre:[
            {
                path:"/",
                element:""
    
            }
        ]
    }
  ]);