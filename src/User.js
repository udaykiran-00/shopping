import React from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
export default function Logout(){
    var navigate=useNavigate();
    function handleLogin(){
        navigate("/login");

    }
    function handleLogout(){
        axios.get("/logout")
        .then(res1=>{
            console.log(res1);
            if(res1.data=="ok")
            {
                navigate("/login");
            }
            else{
                console.log('error');
            }
        })
        .catch(err=>{
            console.log(err);
        })
    }
    function handleRegister(){
        navigate("/register");
    }
    return (
        <div>
        <br/>
            <button  className="btn btn-dark btn1" onClick={handleRegister}>Register</button><br/>
            <button  className="btn btn-dark btn1" onClick={handleLogin}>Login</button><br/>
            <button  className="btn btn-dark btn1" onClick={handleLogout}>Logout</button><br/>

        </div>
    )

}