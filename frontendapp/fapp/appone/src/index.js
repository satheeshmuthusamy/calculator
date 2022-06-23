import React from 'react';
// import Header from 'Header';
// import Footer from 'Footer';
import ReactDOM from 'react-dom/client';

// function Hello(props) {
//     return <h1 > Hello World! < /h1>;
// }
const Home = () => {
    return ( <
        div >
        <
        h1 > Hai from React app < /h1>    <
        h2 > Code file < /h2>
</div>
    )
}

const container = document.getElementById("root");
const root=ReactDOM.createRoot(container);
root.render( < Home / > );