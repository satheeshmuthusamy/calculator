import React, { Fragment, Component } from 'react';
//Inheritence==>Component
import "./Header.css";
class Header extends Component{
    constructor() {
        // console.log("Inside constructor")
        super() 
        this.state={
            heading:'SatheeshM Developer',
            keyword:'User text here'
        }
    }
    handleChange=(event)=>{
          console.log(event.target.value)
        // console.log('Inside event handler')
        this.setState({keyword:event.target.value?event.target.value:'User text here'})
       this.props.userText(event.target.value)
    }
        render(){
        //    console.log('Inside render')
            return ( 
                    <Fragment>
                         <center>
                        <header>
                            {/* <div>Satheesh M Developer</div>   using state*/}
                            <h2 style={{color:'white'}}>{this.state.heading}</h2>
                       
                            <input onChange={this.handleChange}/>
                            {/* <div className="logo">User text here</div> */}
                            <div style={{color:'white'}}>{this.state.keyword}</div>
                        
                        </header>
                        <hr/>
                        </center>
                    </Fragment>
                    
                )
        }
    }
    export default Header;
    // const Header = () => {
    //     return ( 
    //         <Fragment>

//         <center>
//         <h1>Satheesh M Developer</h1>
//         </center>
//         <hr/>
//         </Fragment>
//     )
// }

