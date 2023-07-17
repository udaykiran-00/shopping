import React from "react";
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
export function Bottom3(props) {
 
  const [cartStatus,setCartStatus]=useState(0);

  useEffect(()=>{
    axios.
         post("/cart_check",{
          id:props.id
         })
         .then(res=>{
            console.log(res.data);
            setCartStatus(res.data.length);
            console.log(res.data.length);
            

        })
        .catch(err=>{
            console.log(err);
        });
    
    },[]);

  function placeorderfun(id)
  {
    
    console.log("order btn clicked");
    // navigate("/checkout", { state: { id1: props } });
    
    // axios.post("/order_additem",{
    //   id:id
    // })
    // .then(res1=>{
    //   console.log("succesfully added into order table");
    // })
    // .catch(err=>{
    //   console.log(err);
    // })
    axios
    .post("/order_item",{
      id:id,
      items:[
        {
      name:props.title,
      price:props.price*100,
      quantity:1,
      id:id
        }
    ]
  })
    .then(res=>{
      console.log(res);
      // navigate(res.data.url);
      window.location.href=res.data.url;
      // if(res.ok) return res.json();
      // return res.json().then(json=>Promise.reject(json))
  })
  .catch(err=>{
    console.log(err);
  })
  }
  function cartfun(id)
  {
    
          
          axios.
              post("/cart_add",{
                id
              })
              .then(res=>{
                  console.log(res.data);
                  setCartStatus(1);
                    
                  
      
              })
              .catch(err=>{
                  console.log(err);
              });
      
    
    console.log("cart btn clicked");
  }

  console.log(props);
  const navigate=useNavigate();
  
  
  return (
    <div className="bottom4">
    <div className="bottom3">
    {/* <div id="postdetails">
      <div id="name">{props.name}</div><div id="date">{props.date}</div>
      </div><hr/> */}
       <img src={props.url} style={{ height: "100%", width: "50%", marginLeft:"25%", objectFit: "cover" }} />

    </div>
    <br/>
    <div className="bottom3" id={props.id} >
      

      <h2 id="h2" >
        {props.title}
      </h2>
      <h2 id="p" >
        {props.content}
      </h2>
      
    </div>
    <div className="cartandOrder">
      <div className="cartbtn"><button className="btn btn-dark btn-lg" id="cart_btn" value="Add to Cart" onClick={()=>cartfun(props.id)}>{cartStatus>0?"Added to Cart":"Add to Cart"}</button></div>
      <div className="orderbtn"><button className="btn btn-dark btn-lg" id="orderbtn" value="Place Order" onClick={()=>placeorderfun(props.id)}>Place Order</button></div>

    </div>
    
    </div>
  );
}
// export default Bottom;
