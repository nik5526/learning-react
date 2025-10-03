import React, { lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
// import ErrorBoundary from "./components/errorBoundary";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RoutingError from "./components/RoutingError";   
import RestaurantDetails from "./components/restauarantDetails";
import Grocery from "./components/Grocery";
import { Suspense } from "react";
import Shimmer from "./components/shimmer";

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

//Lazy loading - chucking -code splitting - dynamic bundelling - on demand loading, they all are same.
//when we are using lazy loading we have to wrap that component with Suspense component and we have to provide a fallback UI which will be displayed until the lazy loaded component is loaded.
//suspense is a component which is provided by react and it is used to wrap the lazy loaded component and it takes a prop called fallback which is used to display a fallback UI until the lazy loaded component is loaded.
const Grocery = lazy(()=>{
    return import("./components/Grocery");
});

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
                path: "/grocery",
                element: (<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>),
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