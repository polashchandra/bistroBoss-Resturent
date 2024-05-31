import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Manu from "../pages/Manu/manu/Manu";



export  const Router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
             path:"/",
             element:<Home></Home>
        },
        {
          path:"/menu",
          element:<Manu></Manu>
        }
      ],
    },
  ]);