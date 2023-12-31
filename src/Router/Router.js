import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Navbar from "../Page/Navbar";
import Home from "../Page/Homet";
import Contact from "../Page/Contact";
import Demop from "../demo/Demop";
import Demoss from "../demo/Demoss";
import Web from "../Layout/Web";
import Seo from "../Layout/Seo";

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
            },
            {
                path:'/demop',
                element:<Demop></Demop>
            },
            {
                path:'/demoss',
                element:<Demoss></Demoss>
            },
            {
                path:'/web',
                element:<Web></Web>
            },
            {
                path:'/seo',
                element:<Seo></Seo>
            }
           
        ]
        
    }
])