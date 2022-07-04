import React from 'react';
import {Link} from 'react-router-dom';
const Post=(props)=> {
   
        return(
            
              <div className="card">
                <div className="card-header bg-light ">
                    <h3>Post page</h3>
                
                    <div className="card-body  ">
                    <span class="border border-primary">
                        <p className="card-text text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quo natus repellat porro, expedita officiis necessitatibus tenetur magnam voluptatum maiores atque, dolore esse possimus! Illum eos dolor quo nesciunt ipsam.</p>
                        <h2>JAVASCRIPT</h2>
                        <Link to={`/post/Javascript?page=1`} className="btn btn-danger">Details</Link>
                        <h2>React JS</h2>
                        <Link to={`/post/React?page=2`} className="btn btn-info">Details</Link>
                        <h2>Node JS</h2>
                        <Link to={`/post/Node?page=3`} className="btn btn-success">Details</Link>
                    </span>
                    </div>
                    </div>
            </div>
           
        )
    
}
export default Post;