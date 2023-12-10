
import Auth from "../pages/facebookAuth/facebookAuth";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import InstagramAuth from "../pages/instagramAuth/InstagramAuth"
import Layouts from "../components/layout/Layout";
import TwitterAuth from "../pages/twitterauth/twitterAuth";


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
            {
                path: "/twitterauth",
                element: <TwitterAuth/>
            },
        
        ]
    }
  

]

// export default publicRouter
export default publicRouter;