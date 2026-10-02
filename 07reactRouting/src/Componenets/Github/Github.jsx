import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github(){
    const data = useLoaderData()
    // const [data,setData] = useState()
    // useEffect(() =>{
    //   fetch('https://api.github.com/users/Shashank726-mishra40')
    //   .then(Response => Response.json())
    //   .then(data =>{
    //     console.log(data)
    //     setData(data.followers)
    //   })
    // },[])
    return(
        <>
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
            Github followers: {data.followers}
            <img
  src={data?.avatar_url}
  alt="GitHub profile"
  className="w-32"
/>
            </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async() =>{
   const response = await fetch('https://api.github.com/users/Shashank726-mishra40')
   return response.json();

}