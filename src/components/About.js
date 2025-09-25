import { User } from "./User";
import{ UserData } from "./User";

const About= () => {
    return (
        <div className="about-page">
            <h1>About Us</h1>
            <p>This is a food delivery app.</p>
            <p>We deliver food to your doorstep.</p>
            {/* <User name={"Nikhil Raj"} location={"Greater Noida"}/> */}
            <UserData name={"Nikhil Raj"} location={"Noida"}/>
        </div>  
    );
};

export default About;