import { Link } from "react-router-dom"
export default function Secrets(){
    return (
        <form action="/posts" method="post">
<div className="jumbotron text-center">
  <div className="container">
    <i className="fas fa-key fa-6x"></i>
    <h1 className="display-3">You've Discovered My Secret!</h1>
    <p className="secret-text">Jack Bauer is my hero.</p>
    <hr/>
    <input type="text" name="inp"/>
    <button type="submit">submit</button>
    <Link className="btn btn-light btn-lg" to="/posts" role="button">Get Posts</Link>
    
    <Link className="btn btn-light btn-lg" to="/logout" role="button">Log Out</Link>
    <Link className="btn btn-dark btn-lg" to="/submit" role="button">Submit a Secret</Link>
  </div>
</div>
</form>
    )
}