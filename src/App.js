import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";
import { del, Bottom } from "./bottom";
import msg from "./message";
import Createbox from "./Createbox"
import Header from "./header";
import Posts from "./Posts";
import Subscription from "./Subscription";
import ViewArticle from "./ViewArticle"
import {
  BrowserRouter as Router,

  Route,
  Link
} from "react-router-dom";
import { Routes } from "react-router-dom";
import About from "./About";
import Home from "./home";
import Register from "./Register";
import Login from "./Login";
import Secrets from "./secrets";
import User from "./User";
import Cart from "./Cart";
import Order from "./Order";
import Checkout from "./Checkout";
var a;

export default function App() {

  const [notes, setNotes] = useState([]);
  const [msg, setMsg] = useState("");
  function addnotes(newnote) {
    if (newnote.title != "" || newnote.content != "") {
      setMsg("Posted Succesfully..!")
    }

    // setNotes(prevNotes=>{
    //  return [...prevNotes,newnote]
    // });//do nothing bcoz we don't wznt to display the added content on this below
    //box rather we have created /posts and dsplaying all the content ovr there..
    //so commented this..
  }




  return (
    // <form action="/" method="post" >

    <Router>

      <div>

        <div id="root1">
          <Header />
          <br />


          <Routes>
            <Route exact path="/"
              element={<Home />}
            />
            <Route exact path="/dashboard"
              element={
                <div>
                  <Createbox fun={addnotes} />

                  
                </div>
              } />
            {/* </Route> */}
            <Route exact path="/articles"
              element={<About />

              } />
            <Route exact path="/posts"
              element={<Posts />}
            />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/secrets" element={<Secrets />} />
            <Route exact path="/subscription" element={<Subscription />} />
            <Route exact path="/viewItem" element={<ViewArticle />} />
            <Route exact path="/user" element={<User/>} />
            <Route exact path="/cart" element={<Cart/>} />
            <Route exact path="/order" element={<Order/>} />
            <Route exact path="/checkout" element={<Checkout/>} />

            

            {/* </Route> */}
          </Routes>
        </div>

      </div>
    </Router>

  );
}
