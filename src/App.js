import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header.jsx";
import Body from "./componant/Body.jsx";
// import About from "./componant/about/AboutUs.jsx";
import Contact from "./componant/contact/ContactUs.jsx";
import Error from "./componant/error/error.jsx";
import RestaurantMenu from "./componant/menu/Menu.jsx";
import { lazy, Suspense } from "react";

const Grossary = lazy(()=> import("./componant/grossary/Grossary.jsx"));
const About = lazy(()=> import("./componant/about/AboutUs.jsx"))

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
        path:"/grossary",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Grossary />
          </Suspense>
        )
      },
      { 
        path: "/about", 
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <About />
          </Suspense>
        )
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
