import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { del, Bottom } from "./bottom";
import msg from "./message";
import axios  from "axios";
// import {uuid} from "uuidv4"

export default function Createbox(props){
    
    const [note,setNote]=useState({
        title:"",
        content:"",
        url:"",
        category:"",
        price:""
    });

    function handleSubmit(event){
        event.preventDefault();
        var title=document.getElementById("title1").value;
        var content=document.getElementById("content").value;
        var url=document.getElementById("url").value;
        var category=document.getElementById("category").value;
        var price=document.getElementById("price").value;

        console.log(title,content,url);
        var s="h",c="c1";
        // content.replace(/\n/g, "<br/>")
        axios
        
        .post("/add",{
            title,
            content,
            url,
            category,
            price
            
        })
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
        props.fun(note);
        setNote(prevNotes=>{
            return{
                title:"",
                content:"",
                url:"",
                category:"",
                price:""
            }
        });
    }
    
    // function click1(event){
    //     event.preventDefault();
    //     props.fun(note);
    //     setNote(prevNotes=>{
    //         return{
    //             title:"",
    //             content:""
    //         }
    //     });
    //     // document.getElementById("form").submit();
    // }
    function change1(){
        setNote(prevNotes=>{
            return {
                title: document.getElementById("title1").value,
                content: document.getElementById("content").value,
                url: document.getElementById("url").value,
                category: document.getElementById("category").value,
                price: document.getElementById("price").value


            };
        });
    }

    return (
        <form onSubmit={handleSubmit}>
        <div id="title">
          <input id="title1" onChange={change1} placeholder="Add Title" value={note.title} name="inp1"/><br/>
          <input id="url" onChange={change1} placeholder="Add Img URL" value={note.url} name="url"/>
          <input id="category" onChange={change1} placeholder="Add Category" value={note.category} name="category"/>
          <input id="price" onChange={change1} placeholder="Add Price" value={note.price} name="price"/>

          <textarea rows="4"  id="content" onChange={change1} placeholder="Add Content" value={note.content}  name="text" >
            
          </textarea>
          <button id="add_btn"  >
            +
          </button>
          
        </div>
        </form>
    );
}
