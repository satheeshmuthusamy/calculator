import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home/Home';
import Header from './Header';
import Footer from './Footer';
// import Search from './Home/Search';
// import QuickSearch from './Home/QuickSearch';

const Routing=()=>{
    return(
        <BrowserRouter>
        <Header/>
        <Route path="/" component={Home}/>
        {/* <Route path="/Search" component={Search}/>
        <Route path="/QuickSearch" component={Quicksearch}/> */}
        <Footer/>
        </BrowserRouter>
    )
}



export default Routing;