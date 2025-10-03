// This is a component which will show the shimmer effect when the data is loading.
// We can create a separate component for this or we can create a function which will return the JSX for shimmer effect.

const Shimmer = () =>{
    return(
        <div className="flex flex-wrap">
            <div className="border-0 border-solid border-black w-[300px] h-[380px]  m-[20px] p-2 leading-8 rounded-xl bg-[#dadfea] bg-[linear-gradient(-180deg,rgba(255,255,255,0.50) 0%,rgba(0,0,0,0.50) 100%)] bg-blend-lighten transition-all duration-300 ease-linear font-serif"></div>
            <div className="border-0 border-solid border-black w-[300px] h-[380px]  m-[20px] p-2 leading-8 rounded-xl bg-[#dadfea] bg-[linear-gradient(-180deg,rgba(255,255,255,0.50) 0%,rgba(0,0,0,0.50) 100%)] bg-blend-lighten transition-all duration-300 ease-linear font-serif"></div>
            <div className="border-0 border-solid border-black w-[300px] h-[380px]  m-[20px] p-2 leading-8 rounded-xl bg-[#dadfea] bg-[linear-gradient(-180deg,rgba(255,255,255,0.50) 0%,rgba(0,0,0,0.50) 100%)] bg-blend-lighten transition-all duration-300 ease-linear font-serif"></div>
            <div className="border-0 border-solid border-black w-[300px] h-[380px]  m-[20px] p-2 leading-8 rounded-xl bg-[#dadfea] bg-[linear-gradient(-180deg,rgba(255,255,255,0.50) 0%,rgba(0,0,0,0.50) 100%)] bg-blend-lighten transition-all duration-300 ease-linear font-serif"></div>
            <div className="border-0 border-solid border-black w-[300px] h-[380px]  m-[20px] p-2 leading-8 rounded-xl bg-[#dadfea] bg-[linear-gradient(-180deg,rgba(255,255,255,0.50) 0%,rgba(0,0,0,0.50) 100%)] bg-blend-lighten transition-all duration-300 ease-linear font-serif"></div>
            <div className="border-0 border-solid border-black w-[300px] h-[380px]  m-[20px] p-2 leading-8 rounded-xl bg-[#dadfea] bg-[linear-gradient(-180deg,rgba(255,255,255,0.50) 0%,rgba(0,0,0,0.50) 100%)] bg-blend-lighten transition-all duration-300 ease-linear font-serif"></div>
            <div className="border-0 border-solid border-black w-[300px] h-[380px]  m-[20px] p-2 leading-8 rounded-xl bg-[#dadfea] bg-[linear-gradient(-180deg,rgba(255,255,255,0.50) 0%,rgba(0,0,0,0.50) 100%)] bg-blend-lighten transition-all duration-300 ease-linear font-serif"></div>
            <div className="border-0 border-solid border-black w-[300px] h-[380px]  m-[20px] p-2 leading-8 rounded-xl bg-[#dadfea] bg-[linear-gradient(-180deg,rgba(255,255,255,0.50) 0%,rgba(0,0,0,0.50) 100%)] bg-blend-lighten transition-all duration-300 ease-linear font-serif"></div>
        </div>
    );
};

export default Shimmer;