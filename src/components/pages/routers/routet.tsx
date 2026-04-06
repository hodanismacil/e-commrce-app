

import { createBrowserRouter, Outlet } from "react-router-dom";
import Header from "../Header/header";
import Home from "../home-page/home";
import Products from "../products/product- Details";
import Categories from "../catogorys/cotogors";
import Contact from "../contacts/contacs";
import Carts from "../carts/carts";
import Footer from "../footer/footer";
import Login from "../login/login";



const Router = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Router;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Router />,
    children: [
      {
        index: true,
        element:<Home/>
      },
     {
      path:'products',
      element:<Products/>
     },
     {
      path:'/categories',
      element:<Categories/>
     },
     {
      path:'/Contact',
      element:<Contact/>
     },
      {
        path:"/Carts",
        element:<Carts/>
      },
      {
        path:"/login",
        element:<Login/>
      }
    ],
  },
]);