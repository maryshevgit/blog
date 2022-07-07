import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import Blogs from "./pages/Blogs/Blogs";
import { ADMIN_ROUTE, BLOGS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <Admin />
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTRATION_ROUTE,
        element: <Auth />
    },
    {
        path: BLOGS_ROUTE,
        element: <Blogs />
    },
]