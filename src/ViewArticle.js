import { useLocation } from "react-router-dom";
import { Bottom3 } from "./Bottom3"; 
import { useEffect, useState } from "react";
import axios from "axios";
export default function Login() {
    const location = useLocation();
    const id = location.state?.id1; // Access response data passed as prop
  console.log(id);
  const [item,setItem]=useState([]);
  useEffect(()=>{
        axios.
             post("/viewArticle",{
                id
             })
             .then(res=>{
                console.log(res.data);
                setItem(res.data);
             })
             .catch(err=> {
                console.log(err);
             });
  },[])
  
    return (
        <div id="bottom-div">
            {/* <h1>hello</h1> */}
            
            {item.map((item, index) => (

            <Bottom3 name={item.name} id={item._id} title={item.title} date={item.Date} url={item.url}  content={item.content} category={item.category} price={item.price} />
                ))}
        </div>
    )
  // Rest of the component code
}