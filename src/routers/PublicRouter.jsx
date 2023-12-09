
import Auth from "../pages/facebookAuth/facebookAuth";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import InstagramAuth from "../pages/instagramAuth/InstagramAuth"


const publicRouter =[
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
    }


]

// export default publicRouter
export default publicRouter;