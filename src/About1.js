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
    <div id="bottom-div">
      {data.map((item, index) => (

        <Bottom2 id={item.id} title={item.title} date={item.Date} content={item.content} />
      ))}
    </div>
  );
}
