import React from 'react';
import {useParams,useSearchParams} from 'react-router-dom';
const PostDetailPage=(props)=>{
    let params=useParams();
    let [searchParams]=useSearchParams();
    console.log(props);
    return(
        <center>
          <div className="card">
                <div className="card-header bg-light">
                    <h3>{params.topic} PostDetailPage</h3>
                </div>
                    <div className="card-body  bg-secondary">
                        <p className="card-text text-white">{params.topic}  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quo natus repellat porro, expedita officiis necessitatibus tenetur magnam voluptatum maiores atque, dolore esse possimus! Illum eos dolor quo nesciunt ipsam.</p>
                        <h3>You are page no {searchParams.getAll('page')}</h3>
                    </div>
            </div>
        </center>
    )
}
export default PostDetailPage;