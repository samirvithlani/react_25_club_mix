import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { MuiDemo3 } from "../components/mui/MuiDemo3";

const router = createBrowserRouter([
    {
        path:"user",
        element:<Navbar/>,
        children:[
            {
                path:"muidemo3",
                element:<MuiDemo3/>,
                errorElement:<h1>ERROR..</h1>
            }
        ]
    },
    {
        path:"admin",
        element:<Navbar/>,
        children:[]
    }
])

const AppRoutes =()=><RouterProvider router={router}></RouterProvider>
export default AppRoutes