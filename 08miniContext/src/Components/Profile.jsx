import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile(){
    const {user} = useContext(UserContext)
    if(!user) return <>Please Login</> 
    else return(
        <>
        <h1>Profile Details</h1>
        <div>Welcome {user?.username}</div>
        <div>Your PassWord is {user.password}</div>
        </>
        
    )
}


export default Profile