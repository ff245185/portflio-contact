import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Navbar from "../Page/Navbar";
import Home from "../Page/Homet";
import Contact from "../Page/Contact";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            }
           
        ]
        
    }
])