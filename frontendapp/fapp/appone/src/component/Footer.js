import React from 'react';


const Footer= (props) => {
    console.log("props value",props);
    return(
        <React.Fragment>
        <hr/>
        <center>
            <h3> &copy;SatheeshM  {props.month} {props.year} </h3>
        </center>
        
        </React.Fragment>
    )
}

export default Footer;
