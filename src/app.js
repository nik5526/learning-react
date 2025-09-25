import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
import ErrorBoundary from "./components/errorBoundary";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RoutingError from "./components/RoutingError";   
import RestaurantDetails from "./components/restauarantDetails";

const Main = () =>{
    return (
        <div className="app">
            <Header/>
            {/* <ErrorBoundary> */}
            <Outlet/>
            {/* </ErrorBoundary> */}
        </div>

    );

};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [

            {
            path: "/",
            element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <ContactUs/>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantDetails/>,
            },
                ],
        errorElement: <RoutingError/>,
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <RouterProvider router = {appRouter}/>);