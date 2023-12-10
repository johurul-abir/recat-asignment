
import Auth from "../pages/facebookAuth/facebookAuth";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import InstagramAuth from "../pages/instagramAuth/InstagramAuth"
import Layouts from "../components/layout/Layout";


const publicRouter =[
    {
        element:<Layouts/>,
        children:[
           
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/blog",
                element: <Blog/>
            },
            {
                path: "/facebookauth",
                element: <Auth/>
            },
            {
                path: "/instagramauth",
                element: <InstagramAuth/>
            },
        
        ]
    }
  

]

// export default publicRouter
export default publicRouter;