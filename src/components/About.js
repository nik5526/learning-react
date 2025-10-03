
import UserData from "./User";

const About= () => {
    return (
        <div className="flex  flex-col justify-center items-center h-[70vh] font-serif ">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p>This is a food delivery app.</p>
            <p>We deliver food to your doorstep.</p>
            {/* <User name={"Nikhil Raj"} location={"Greater Noida"}/> */}
            <UserData name={"Nikhil Raj"} location={"Noida"}/>
        </div>  
    );
};

export default About;