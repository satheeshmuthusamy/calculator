import React from 'react';  
// import ReactDOM from 'react-dom/client'; 
// import Footer from './Footer';
// import Header from './Header';
// import Post from './Post';
// import Profile from './Profile';

const Home=(props)=>{ 
    // console.log(props)
        return(
            <>
            <div className="card">
                <div className="card-header bg-info">
                    <center>
                    <h3>Home page</h3>
                    </center>
                    
                </div>
                    <div className="card-body  bg-secondary">
                        <p className="card-text text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque quo natus repellat porro, expedita officiis necessitatibus tenetur magnam voluptatum maiores atque, dolore esse possimus! Illum eos dolor quo nesciunt ipsam.</p>
                    </div>
            </div>
           </>   
        )
     } 
// const container = document.getElementById("root"); 
// const root=ReactDOM.createRoot(container); 
// root.render(<Home/>);

export default Home;