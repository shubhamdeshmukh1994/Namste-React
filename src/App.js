import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header.jsx";
import Body from "./componant/Body.jsx";
import About from "./componant/about/AboutUs.jsx";
import Contact from "./componant/contact/ContactUs.jsx";
import Error from "./componant/error/error.jsx";
import RestaurantMenu from "./componant/menu/Menu.jsx";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  { 
    path: "/", 
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      { 
        path: "/about", 
        element: <About />, 
      },
      { 
        path: "/contact", 
        element: <Contact />, 
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      }
    ]
   },
  { 
    path: "/about", 
    element: <About />, 
  },
  { 
    path: "/res", 
    element: <Contact />, 
  },
  
]); 

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
