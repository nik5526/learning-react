// This is a component which will show the shimmer effect when the data is loading.
// We can create a separate component for this or we can create a function which will return the JSX for shimmer effect.

const Shimmer = () =>{
    return(
        <div className="shimmer-container">
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
            <div className="shimmer-card"></div>
        </div>
    );
};

export default Shimmer;