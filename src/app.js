import React, { lazy,Suspense,useContext,useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/body";
// import ErrorBoundary from "./components/errorBoundary";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import RoutingError from "./components/RoutingError";   
import RestaurantDetails from "./components/restauarantDetails";
import Shimmer from "./components/shimmer";
import UserContext from "./utilities/useContext";
 
const Main = () =>{

    const[userName,setuserName]= useState();

    useEffect(()=>{
        const data = {
            name : "NR",
        }
        setuserName(data.name);
    },[]);
    return (
        <UserContext.Provider value={{loggedInUser : userName , setuserName}}>
            <div className="app">
                <UserContext.Provider value={{loggedInUser : "NIK"}}>
                    <Header/>
                </UserContext.Provider>
                {/* <ErrorBoundary> */}
                <Outlet/>
                {/* </ErrorBoundary> */}
            </div>
        </UserContext.Provider>
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