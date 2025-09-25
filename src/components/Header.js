import { LOGO_URL } from "../utilities/links";
import { useState } from "react";
import { Link } from "react-router-dom"
import "../../index.css";

const Header = () => {

    const [loginbtn, setloginbtn] = useState("Login");
    return (
        <div className="Header">
            <div className="logo">
                <img id="logo" src={LOGO_URL} alt="Logo" />
            </div>
            <div className="nav-bar">
                <ul>
                    {/* never use anchor tag in building you website in react because when we clickk on anchor tag the whole page get refreshed . */}
                    {/* rather than using anchoor tag we will use link component from react , it is very fast ,it does not relod the whole page 
                    and best practice is to use it rather than anchor tag. */}
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to = "/about" className="link">About</Link>
                        </li>
                    <li>
                        <Link to="/contact" className="link">Contact Us</Link>
                    </li>
                    <li>Cart</li> 
                    <li>
                        <button className="login-btn" onClick={()=>{
                            loginbtn === "Login" ? setloginbtn("Logout") : setloginbtn("Login");
                        }}> 
                            {loginbtn}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;