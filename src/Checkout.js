import { useLocation } from "react-router-dom";
import { Bottom3 } from "./Bottom3"; 
import { useEffect, useState } from "react";
import axios from "./axios";

export default function Checkout(){
    const location = useLocation();
    const props = location.state?.id1; // Access response data passed as prop
    console.log(props);
    const [item,setItem]=useState(0);

   
    setItem(
        item=props.price
    )


    function checkoutfn()
    {
      
      console.log("checkout btn clicked");
      
      
      axios
      .post("/order_item",{
        id:props.id,
        items:[
          {
        name:props.title,
        price:props.price*100,
        quantity:1,
        id:props.id
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
    }

    return(
        <div className="container mt-5">
  <h2>Checkout</h2>

  <div className="row">
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">

            <div className="form-group">
              <label for="address">Delivery-Address</label>
              <textarea type="textarea" rows="4" className="form-control" name="address" id="address"></textarea>
            </div>
            <div className="form-group">
              <label for="amount" >Order-Summary</label>
              <p className="amount" name="amount">Items:{"₹"+item.price}</p>
              <p className="amount" name="amount">Delivery:{"₹0.00"}</p>
              <hr/>
              <p className="amount" name="amount">Total:{"₹"+item.price}</p>


            </div>
            <button  className="btn btn-dark" onClick={checkoutfn}>Checkout</button>
            <p id="p11"></p>
            

        </div>
      </div>
    </div>

   

  </div>
</div>
    )
}