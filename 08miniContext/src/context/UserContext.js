import React from "react";

// "React, mere liye ek Context object bana do jisme main user-related data 
// ko components ke beech share kar sakun."

// For Example:-
{/* <UserContext>
    <Login></Login>
    <Cards></Cards>
    </UserContext> */}

const UserContext = React.createContext()
 

export default UserContext;
