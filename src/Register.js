import axios from "axios"
import {useNavigate} from "react-router-dom";
export default function Register(){
    const navigate=useNavigate();
    function clickHandle(e){
        e.preventDefault();
        const username=document.getElementById("inp").value;
        const password=document.getElementById("pass").value;
        axios
             .post("/register",{
               username,
               password 
             })
             .then(res1=>{
                console.log(res1);
                if(res1.status==200)
                navigate("/login");
             })
             .catch(err=>{
                console.log(err);
             });

    }
    
    return(
        <div className="container mt-5">
  <h1>Register</h1>

  <div className="row">
    <div className="col-sm-8">
      <div className="card">
        <div className="card-body">

          <form >
            <div className="form-group">
              <label for="email">Email</label>
              <input type="email" className="form-control" name="username" id="inp"/>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" className="form-control" name="password" id="pass"/>
            </div>
            <button  className="btn btn-dark" onClick={clickHandle}>Register</button>
          </form>

        </div>
      </div>
    </div>

    

  </div>
</div>
    )
}