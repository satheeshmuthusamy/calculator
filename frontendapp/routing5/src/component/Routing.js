import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Post from './Post';
import Footer from './Footer';
import Profile from './Profile';
import PostDetailPage from './PostDetailPage';



const Routing=()=>{
    return(
<BrowserRouter>



<div className="container-fluid">
        <Header />
        <Route exact path="/"component={Home}/>
        <Route exact path="/Post"component={Post}/>
        <Route path="/Profile"component={Profile}/>
        <Route path="/post/:topic"component={PostDetailPage}/>
        <Footer />
</div>
</BrowserRouter>
    )
}

export default Routing;