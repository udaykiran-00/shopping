import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import axios from "./axios";
import {Bottom}  from "./bottom";
import { CartItems } from "./CartItems";
export default function Cart(){

    const [cartItems,setItems]=new useState([]);

    useEffect(()=>{

        axios.
        get("/cart_items")
        .then(res1=>{
            console.log(res1.data);
            setItems(res1.data);
        })
    },[])
    
    return(
        <div id="bottom-div">
        {
         cartItems.map(items=>{
            return <CartItems name={"example"} id={items._id} date={items.Date} title={items.title} url={items.url} content={items.content.substr(0,15)} />
        })
        }
        
      </div>
    )

}