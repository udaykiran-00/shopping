import { useEffect, useState } from "react"
import { Bottom } from "./bottom";
import axios from "axios";

export default function Posts(){
    const [posts,setPosts]=useState({
        name:"",
        arr:[]
    });
    
    useEffect(()=>{
        axios.
             get("/posts")
             .then(res=>{
                console.log(res.data);
                setPosts(prevNotes=>{
                   return {
                    name:res.data.name,
                    arr:res.data.arr
                   } 
                })
                    // res.data.name,res.data.arr);
                

            })
            .catch(err=>{
                console.log(err);
            });
        
        },[]);
    
    
    return(
        <div id="bottom-div">
        {
         posts.arr.map(items=>{
            return <Bottom name={posts.name} id={items._id} date={items.Date} title={items.title} content={items.content} />
        })
        }
        
      </div>
    )
}