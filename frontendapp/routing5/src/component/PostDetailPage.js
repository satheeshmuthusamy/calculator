import React from 'react';

const PostDetailPage=(props)=>{
    console.log(props);
    return(
        <center>
          <div className="card">
                <div className="card-header bg-light">
                    <h3>{props.match.params.topic} PostDetailPage</h3>
                </div>
                    <div className="card-body  bg-secondary">
                        <p className="card-text text-white">{props.match.params.topic}  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quo natus repellat porro, expedita officiis necessitatibus tenetur magnam voluptatum maiores atque, dolore esse possimus! Illum eos dolor quo nesciunt ipsam.</p>
                        <h3>You are page no {props.location.search.split('=')[1]}</h3>
                    </div>
            </div>
        </center>
    )
}
export default PostDetailPage;