import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Post from './Post';
import Footer from './Footer';
import Profile from './Profile';
import PostDetailPage from './PostDetailPage';
import Main from './main';



const Routing=()=>{
    return(
        <BrowserRouter>
            <Header/>
             <div className="container">
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}/>
                    <Route path="home" element={<Home/>}/>
                    <Route path="post" element={<Post/>}/>
                    <Route path="post/:topic" element={<PostDetailPage/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="*" element={
                        <div>
                            <center>
                                <h1>Not Found Page</h1>
                            </center>
                        </div>
                    }/>
                </Route>
            </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;