import { useRouteError } from "react-router";

const RoutingError = () => {

    const err = useRouteError();
    console.log(err);
    return <div className="routing-error"> 
        <h1>OOPS!!!</h1>
        <h2>Something Went Wrong</h2>
        <h2>{err.status}!{err.statusText}</h2>
        <h2>{err.data}</h2>
    </div>
}
export default RoutingError;