import axios from "axios"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Subscription(){
    var navigate=useNavigate();

    const [data,setData]=useState(false);

    function handleClick(){
        axios.
              post("/subscribe",
              {
                items:[
                    // {id:1,quantity:3},
                    // {id:2,quantity:1},
                    {id:3,quantity:1}
                ],
              }
            )

            
              
                .then(res=>{
                    console.log(res);
                    // navigate(res.data.url);
                    window.location.href=res.data.url;
                    // if(res.ok) return res.json();
                    // return res.json().then(json=>Promise.reject(json))
                })
                
                
    }
    useEffect(()=>{
        axios
             .get("/subscribe_check")
             .then(res=>{
                console.log(res);
                if(res.data=="yes")
               {
                    setData(true);
               }
                else
                setData(false);
             })
             .catch(err=>{
                console.log(err);
             })

             
    },[]);
    return (
        <div id="subscription">
        {
            data?(<h2>Subscribed</h2>):(<button onClick={handleClick}>Subscribe</button>)
        }
        </div>
    )
}