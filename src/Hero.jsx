import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import ProductPage from "./Components/ProductPage";
import FullProduct from './Components/Products/FullProduct.jsx';
// import AboutAs from "./Components/AboutAs.jsx/AboutAs.jsx";
import About from "./Components/AboutAs.jsx/About.jsx";
import ProductPage from "./Components/Products/ProductPage.jsx";
import App from "./Components/Hero/App.jsx";
import CartPage from "./Components/Cart/CartPage.jsx";
import { Payments } from "./Components/Payments/Payments.jsx";
import Login from "./Components/Login/Login.jsx";
// import { Payment } from "./Components/Payments/Payments.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
     path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/fullproduct",
    element: <FullProduct/>,
  },
  {
    path: "/about",
   element: <About />,
 },
  {
    path: "/cartpage",
    element: <CartPage/>,
  },
 ,
  {
    path: "/payment",
    element: <Payments/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  
]);

const Hero = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
      )
}

export default Hero