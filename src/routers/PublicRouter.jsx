import Auth from "../pages/facebookAuth/facebookAuth";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import InstagramAuth from "../pages/instagramAuth/InstagramAuth";
import Layouts from "../components/layout/Layout";
import TwitterAuth from "../pages/twitterauth/twitterAuth";
import Admission from "../pages/Admission/Admission";
import Students from "../pages/Students/Students";
import Form from "../pages/Form/Form";
import AddDevs from "../pages/addDevs/AddDevs";
import Linkedin from "../pages/linkedinhome/Linkedin";
import UserProfile from "../pages/user_profile/UserProfile";

const publicRouter = [
  {
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog title="hello i am from blog" name="blob page" />,
      },
      {
        path: "/facebookauth",
        element: <Auth />,
      },
      {
        path: "/instagramauth",
        element: <InstagramAuth />,
      },
      {
        path: "/twitterauth",
        element: <TwitterAuth />,
      },
      {
        path: "/addmission",
        element: <Admission />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/form",
        element: <Form />,
      },
      {
        path: "/adddevs",
        element: <AddDevs />,
      },
      {
        path: "/linkedin",
        element: <Linkedin />,
      },
      {
        path: "/user",
        element: <UserProfile title="hello i am from user" age="30" />,
      },
    ],
  },
];

// export default publicRouter
export default publicRouter;
