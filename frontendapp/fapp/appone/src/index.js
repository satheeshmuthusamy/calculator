import React from 'react';  
import ReactDOM from 'react-dom/client'; 
import Home from './component/Home';
// import Footer from './Footer';
// import Header from './component/Header';

// const Home = () => { return (

//     <>
//     <Header />
//     <center>
//         <h1> Hello World! </h1>
//         <h2>Hello from react</h2>
//     </center>
//     <Footer />
//     </>
// ) } 
const container = document.getElementById("root"); 
const root=ReactDOM.createRoot(container); 
root.render(<Home/>);