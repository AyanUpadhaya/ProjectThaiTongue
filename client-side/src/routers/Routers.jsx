import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Recipes from "../Pages/Recipes";
import Profile from "../Pages/Profile";
import Recipepage from "../Pages/Recipepage";
import NotFoundPage from "../Pages/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/Blogs";
import AboutUs from "../Pages/AboutUs";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<NotFoundPage></NotFoundPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('https://thai-tongue-server.vercel.app/chefs')
            },
            {
                path:'/aboutus',
                element:<AboutUs></AboutUs>,

            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path:'/blog',
                element:<Blogs></Blogs>
            },
            {
                path:'/recipes',
                element:<Recipes></Recipes>,
                errorElement:<NotFoundPage></NotFoundPage>,
                children:[
                    {
                        path:':id',
                        element:<Profile></Profile>,
                        loader:({params})=>fetch(`https://thai-tongue-server.vercel.app/chefs/${params.id}`)
                    },
                    {
                        path:"recipepage/:id",
                        element:<PrivateRoute><Recipepage></Recipepage></PrivateRoute>,
                        loader:({params})=>fetch(`https://thai-tongue-server.vercel.app/recipes/${params.id}`)
                    }
                ]
        
        
            },
        ]
    },
    
])

export default router;