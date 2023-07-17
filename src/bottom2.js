import React from "react";
import ReactDOM from "react-dom";
import {useNavigate} from "react-router-dom";

export function Bottom2(props) {
 
  console.log(props);
  const navigate=useNavigate();
  
  function div_click(id){
    console.log(id);
    navigate("/viewItem", { state: { id1: id } });
  }
  return (
    <div className="bottom">
    <div className="bottom5">
    <div id="postdetails">
      <div id="name">{props.name}</div><div id="date">{props.date}</div>
      </div><hr/>
       <img src={props.url} style={{ height: "100%", width: "50%",marginLeft:"25%" }} />

    </div>
    <br/>
    <div className="bottom2" id={props.id} onClick={()=>div_click(props.id)}>
      

      <h2 id="h2" >
        {props.title}
      </h2>
      <p id="p" >
        {props.content}.......
      </p>
      
    </div>
    
    </div>
  );
}
// export default Bottom;
