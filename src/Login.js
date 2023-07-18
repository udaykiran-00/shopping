import axios from "./axios";
import { useState } from "react";
import { useNavigate } from "react-router"

export default function Login(){


    const [item,setItem]=new useState({
      inp:"",
      pass:"",
      value:""
    })


    const navigate =useNavigate();
    function handleClick(e){
        const username=document.getElementById("inp1").value;
        const password=document.getElementById("pass1").value;
        axios
            .post("/login",{
                username,
                password
            })
            .then(res1=>{
                console.log(res1);
                console.log(res1.status);
                if(res1.status==200)
                navigate("/posts");
                else{
                  setItem({
                    inp:username,
                    pass:"",
                    value:"Non-Matching Credentials"
          
                  })
                }
             })
             .catch(err=>{
                console.log(err);
                setItem({
                  inp:username,
                  pass:"",
                  value:"Non-Matching Credentials"
        
                })
             });

    }

    function inp()
    {
      const username=document.getElementById("inp1").value;
        const password=document.getElementById("pass1").value;
        setItem({
          inp:username,
          pass:password,
          value:""

        })
    }
    
    return(


        <div className="container mt-5">
  <h2>Login</h2>

  <div className="row">
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">

            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" name="username" onInput={inp} id="inp1" value={item.mail}/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" name="password" onInput={inp} id="pass1" value={item.pass}/>
            </div>
            <button  className="btn btn-dark" onClick={handleClick}>Login</button>
            <p id="p11">{item.value}</p>
            

        </div>
      </div>
    </div>

   

  </div>
</div>
    )
}