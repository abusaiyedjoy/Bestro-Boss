import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import MenuPage from "../Pages/MenuPage/MenuPage";
import Home from "../Pages/Home/Home";
import OurShop from './../Pages/Order/OurShop';
import ContactUs from "../Pages/Contact/ContactUs";
import SignI from './../Components/Sing In/SignIn';
import SignUp from './../Components/Sing Up/SignUp';
import PrivateRoute from "./PrivateRoute.jsx/PrivateRoute";
import Cart from "../Components/Deshboard/MyCart/Cart";
import Dashboard from './../Components/Deshboard/Deshboard';
import AllUsers from "../Components/Deshboard/All Users/AllUsers";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App></App>,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "menu",
          element: <MenuPage />,
        },
        {
          path: "shop/:category",
          element: <OurShop />,
        },
        {
          path: "contact",
          element: <ContactUs />,
        },
      ],
    },
    {
      path: "signIn",
      element: <SignI></SignI>,
    },
    {
      path: "signUp",
      element: <SignUp></SignUp>,
    },
    {
      path: 'dashboard',
      element: <PrivateRoute> <Dashboard></Dashboard> </PrivateRoute>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },

        // admin routes
        {
          path: 'users',
          element: <AllUsers></AllUsers>
        }

      ]
    }
  ]);