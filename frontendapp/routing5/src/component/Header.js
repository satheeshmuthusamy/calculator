import React,{Component} from 'react';
import {Link} from 'react-router-dom';          
class Header extends Component{
    render(){
        return(
         
 <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
<div className="container-fluid">
{/* <Link className="navbar-brand" to="/">Home</Link> */}
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <Link className="navbar-brand" href="#">SHIFT CODER</Link>
  <ul className="navbar-nav">
    <li className="nav-item">
      <Link to="/"  className="nav-link" >Home</Link>
    </li>
   <li className="nav-item">
     <Link to="/Post" className="nav-link">Post</Link>
    </li>
    <li className="nav-item">
     <Link to="/Profile"  className="nav-link" >Profile</Link>
    </li>
   
  </ul>
  </div>
</div>
</nav> 

//  <nav className="navbar navbar-expand-sm bg-light navbar-light">
//  <div className="container-fluid">
//    <ul className="navbar-nav">
//      <li className="nav-item">
//        <Link clLinkssName="nav-link active" href="#">Active</Link>
//      </li>
//     <li className="nav-item">
//        <Link className="nav-link" href="#">Link</Link>
//      </li>
//      <li className="nav-item">
//        <Link className="nav-link" href="#">Link</Link>
//      </li>
//      <li className="nav-item">
//        <Link className="nav-link disabled" href="#">Disabled</Link>
//      </li>
//    </ul>
//  </div>
// </nav>      

        
           
        )
    }
}
export default Header;