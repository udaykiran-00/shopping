import { useEffect, useState } from "react"
import { Bottom } from "./bottom";
import axios from "./axios";
import { OrderList } from "./OrderList";

export default function Order(){
    const [order,setOrder]=useState([]);
    
    useEffect(()=>{
        axios.
             get("/order")
             .then(res=>{
                console.log(res.data);
                setOrder(res.data);
                
                    // res.data.name,res.data.arr);
                

            })
            .catch(err=>{
                console.log(err);
            });
        
        },[]);
    
    
    return(
        <div id="bottom-div">
        {
         order.map(items=>{
            return <OrderList purpose={"order"} name={""} id={items.text._id} date={"Ordered-on:"+items.date} title={items.text.title} url={items.text.url} content={items.text.content.substr(0,15)} />
        })
        }
        
      </div>
    )
}