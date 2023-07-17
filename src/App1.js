import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { del, Bottom } from "./bottom";
import msg from "./message";
import Createbox from "./Createbox"
import Header from "./header";
import {
  BrowserRouter as Router,
  
  Route,
  Link
}from "react-router-dom";
import {Routes} from "react-router-dom";
import About from "./About";
var a;

export default function App() {

  const [notes,setNotes]=useState([]);
  
  function addnotes(newnote)
  {
      setNotes(prevNotes=>{
       return [...prevNotes,newnote]
      });
  }
  
 
  
    
  return (
    // <form action="/" method="post" >
   
   <Router>
    
    <div>
    
      <div id="root1">
        <Header/>
        <br />
        

        <Routes>
        <Route exact path="/"
        element={
          <div>
        <Createbox fun={addnotes} />
        <div id="bottom-div">
        {notes.map((items) => {
        return <Bottom title={items.title} content={items.content} />;
      })}
      </div>
      </div>
        }/>
          {/* </Route> */}
          <Route exact path="/About"
            element={<About/>
            
          }/>
            
          {/* </Route> */}
        </Routes>
      </div>
      
    </div>
    </Router>
    
  );
}
