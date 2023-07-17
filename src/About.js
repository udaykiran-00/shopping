// import axios from "axios"
// import { Bottom } from "./bottom";

// export default  function About(){
//     var arr=[];
//     axios.
//     get("/about")
//     .then((res)=>{
//         for(var i=0;i<res.data.length;i++)
//         {
//             arr.push(res.data[i]);
//         }
//         console.log(res);
//     });
//     return(
//         <div>
//      {
//         arr.map((item)=>{
//         return <Bottom title={item.title} content={item.content}/>
//      })
//      }
//      </div>
//     );
// }
import axios from "axios"
import { useEffect, useState } from "react";
import { Bottom2 } from "./bottom2";

export default function About() {
  const [data, setData] = useState([]);
   
  function handleClick(){
    var search=document.getElementById("search").value;
    axios.
         post("/search",{
          search
         })
         .then(res1=>{
          console.log(res1);
          setData(res1.data);
         })
         .catch(err=>{
          console.log(err);
         })
  }

  useEffect(() => {
    axios
      .get("/articles")
      .then((res) => {
        setData(res.data);
          
        
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
    <div id="search_div">
    <input  type="text" id="search" onChange={handleClick}/>
    <button onClick={handleClick} id="btn">
      Search
    </button>
    </div>
    <div id="bottom-div">
      {data.map((item, index) => (

        <Bottom2 name={item.name} id={item._id} title={item.title} date={item.Date} url={item.url}  content={item.content.substr(0,15)} />
      ))}
    </div>
    </div>
  );
}
