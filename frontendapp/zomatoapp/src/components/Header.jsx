import React,{Component} from 'react';
//import {Link} from 'react-router-dom';
import './Header.css';          
class Header extends Component{
    render(){
        return(
         
//  <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
// <div className="container-fluid">
// {/* <Link className="navbar-brand" to="/">Home</Link> */}
// <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//     <Link className="navbar-brand" href="#">Zomato!</Link>
//   <ul className="navbar-nav">
//     <li className="nav-item">
//       <Link to="/Home"  className="nav-link" >Home</Link>
//     </li>
//    <li className="nav-item">
//      <Link to="/Post" className="nav-link">SignUp</Link>
//     </li>
//     <li className="nav-item">
//      <Link to="/Profile"  className="nav-link" >Login</Link>
//     </li>
//     <li className="nav-item">
//      <Link to="/Profile"  className="nav-link" >Login</Link>
//     </li>
//     <li className="nav-item">
//      <Link to="/Profile"  className="nav-link" >Login</Link>
//     </li>
//   </ul>
//   </div>
// </div>
// </nav> 

<div id="header">
<div id="icon">
    <h1>ZOMATO!</h1>
    <div id="login">
        <div id="old"><button>login</button></div>
        <div id="new"><button>signup</button></div>
    </div>
</div>
<div id="social">
    {/* <Link href="https.//facebook.com"target="_blank">
    <img src="fbicon.png" alt="fbicon"class="slogo"/>
</Link>
<Link href="https.//youtube.com"target="_blank">
    <img src="./images/yticon.jpg" alt="youtubeicon"class="slogo"/>
</Link>
<Link href="https.//instagram.com"target="_blank">
    <img src="./images/instaicon.jpg" alt="instaicon"class="slogo"/>
</Link> */}
</div>
</div>     

        
           
        )
    }
}
export default Header;
