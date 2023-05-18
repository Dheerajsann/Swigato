import React, { Suspense, lazy, useState } from "react";
import Header from "./header/Header";
import Body from "./body/Body";
import Footer from "./footer/Footer";
import { Outlet, createBrowserRouter } from "react-router-dom";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Profile from "./Profile";
import Loader from "./Loader";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import store from "../utils/store";
import Cart from "./header/Cart";


const Instamart = lazy(() => import("./Instamart")); //chuncking, lazy-loading, dynamic-import, on-demand-loading.

export function App() {
  const [user, setUser] = useState({
    name: "using useContext hook",
    email: "dheerajsheeroju@gmail.com",
  });
  
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ users: user, setUsers: setUser }}>
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
}

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Loader />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
