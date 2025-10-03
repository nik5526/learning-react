import {useEffect,useState}  from "react";

const onlineStatusCheck = () => {
    // for showing online status our browser gives us a event listner called online and offline from which we can detect the online and offline status of the user.
    const[onlineStatus,setOnlineStatus] = useState(true);

   useEffect(() =>{
    window.addEventListener("offline", () =>{
        setOnlineStatus(false);
    });
    window.addEventListener("online", () =>{
        setOnlineStatus(true);
    });

   },[]);
    return onlineStatus;
}

export default onlineStatusCheck;