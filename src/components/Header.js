import { LOGO_URL } from "../utilities/links";
import { useState } from "react";
import { Link } from "react-router-dom"
// import "../../index.css";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header = () => {

    const [signinbtn, setsigninbtn] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between items-center w-full h-[150px] bg-white z-10">
            <div className="logo">
                <img className="w-36 " src={LOGO_URL} alt="Logo" />
            </div>
            <div className="m-4 p-4 "> 
                <ul className="flex gap-16 p-4 m-4 items-center font-serif font-bold text-lg text-black ">
                    {/* never use anchor tag in building you website in react because when we clickk on anchor tag the whole page get refreshed . */}
                    {/* rather than using anchoor tag we will use link component from react , it is very fast ,it does not relod the whole page 
                    and best practice is to use it rather than anchor tag. */}
                    <li >
                        {onlineStatus ? "🟢" : "🔴"}

                    </li>
                    <li className="style-none text-2xl font-bold  hover:text-gray-500">
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li className="style-none text-2xl font-bold  hover:text-gray-500">
                        <Link to = "/about" className="link">About</Link>
                        </li>
                    <li className="style-none text-2xl font-bold  hover:text-gray-500">
                        <Link to="/contact" className="link">Contact Us</Link>
                    </li>
                    <li className="style-none text-2xl font-bold  hover:text-gray-500">
                        <Link to="/grocery" className = "link">Grocery</Link>
                    </li> 
                    <li>
                        <button className="cursor-pointer style-none text-2xl font-bold" onClick={()=>{
                            signinbtn === "Sign In" ? setsigninbtn("Sign Out") : setsigninbtn("Sign In");
                        }}> 
                            {signinbtn}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;