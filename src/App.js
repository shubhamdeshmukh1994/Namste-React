import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Header from "./componant/Header.jsx";
import Body from "./componant/Body.jsx";
// import About from "./componant/about/AboutUs.jsx";
import Contact from "./componant/contact/ContactUs.jsx";
import Error from "./componant/error/error.jsx";
import RestaurantMenu from "./componant/menu/Menu.jsx";
import { lazy, Suspense } from "react";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore/appStore";
import Cart from "./componant/cart/Cart.jsx";
import Demo from "./componant/demo/Demo.jsx";
import Demo2 from "./componant/demo/Demo2.jsx";
import StopWatch from "./componant/stopWatch/StopWatch.jsx";

const Grossary = lazy(() => import("./componant/grossary/Grossary.jsx"));
const About = lazy(() => import("./componant/about/AboutUs.jsx"));

const AppLayout = () => {
  //authcode
  const [userName, setUserName] = useState("Guest");

  useEffect(() => {
    //make api call and get userdetails
    const data = {
      name: "Shubham Solanke",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app-layout">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "/grossary",
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <Grossary />
            </Suspense>
          ),
        },
        {
          path: "/about",
          element: (
            <Suspense fallback={<h1>Loading....</h1>}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/restaurant/:resId",
          element: <RestaurantMenu />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/demo",
          element: <><Demo /><Demo2/> </>,
        },
        {
          path: "/stop-watch",
          element: <StopWatch />,
        },
      ],
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/res",
      element: <Contact />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
    },
  },
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);
