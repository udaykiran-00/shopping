import { Link } from "react-router-dom";

export default function Home(){
return (
    
    <div className="jumbotron centered div2">
  <div className="container">
    <h2 className="display-3">e-Shop</h2>
    <p className="lead">Online Shopping App...!</p>
    <hr/>
    <Link className="btn btn-light btn-lg" to="/register" role="button">Register</Link>
    <Link className="btn btn-dark btn-lg" to="/login" role="button">Login</Link>

  </div>
</div>
);
}