import React from "react";
import ReactDOM from "react-dom";
import axios from "./axios";
import { useNavigate } from "react-router";
export function OrderList(props) {


  const navigate=useNavigate();
  
  function div_click(id){
    console.log(id);
    navigate("/viewItem", { state: { id1: id } });
  }

  
    
  
  return (
    <div className="bottom" id={props.id}>
      <div id="postdetails">
      <div id="name">{props.name}</div><div id="date">{props.date}</div>
      </div><hr/>
      <div className="hold_items" onClick={()=>div_click(props.id)}>
        <div className="bottom5">
        <img src={props.url} style={{ height: "100%", width: "50%" }} />
        </div>
    
    
        <div className="bottom2" id={props.id} >
          

          <h2 id="h2" >
            {props.title}
          </h2>
          <p id="p" >
            {props.content}.......
          </p>
          {/* <button id="del_btn" onClick={(e) => { e.stopPropagation(); del(props.id); }}>
            -
          </button> */}
        </div>
      </div>
    
    </div>
    
  );
}
// export default Bottom;
