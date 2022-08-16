import React,{Component} from 'react';
import {Link , withRouter} from 'react-router-dom';
import './Header.css';  
const url="https://developerjwt.herokuapp.com/api/auth/userinfo";        
class Header extends Component{

    constructor(){
        super();
    this.state={
        userData:'',
    }
    }

    handleLogout=()=>{
        sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        this.props.history.push('/');
    }
    conditionalHeader=()=>{
        if(sessionStorage.getItem('ltk')){
            let data = this.state.userData;
            let outArray = [data.name, data.email, data.phone, data.role, data.address];
            sessionStorage.setItem('userinfo',outArray);
            sessionStorage.setItem('loginStatus',true)
            return(
                <>
                    <div className="btnlogin">
                        <Link to="/" className="btn btn-info">
                            <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                        </Link> &nbsp;
                        <button onClick={this.handleLogout} className="btn btn-danger">Logout</button>
                    </div>
                </>
            
            )
        }else{
            return(
                <>
                <Link to="/login" className="btn btn-primary">
                    <span className="glyphicon glyphicon-log-in"></span>Login
                </Link>
                <Link to="/register" className="btn btn-info">
                    <span className="glyphicon glyphicon-user"></span>Register
                </Link>
                </>
            )
        }
    
    }

    render(){
        return( 
<div className="header1">
    <div className="h1">
         <h1>
            ZOMATO!
         </h1>
    </div>
    <div className="panel-1">
        <Link to="/"className="btn btn-success btn-1">Home</Link>{this.conditionalHeader()}
    </div>
</div>    
        )
    }
    //get user info after login 
    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk')
            }
        })
        .then((res) =>  res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
}
export default withRouter(Header);//because the header file is nested;
