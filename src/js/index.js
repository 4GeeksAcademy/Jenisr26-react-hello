import React from "react"; //Import react into the bundle
import ReactDOM from "react-dom/client";//Import reactDom
import "../styles/index.css";// Include your style into the webpack bundle
import Home from "./component/Home.jsx";//Import your own components

//render your react application
//                 //Donde?                       //Que?
ReactDOM.createRoot(document.getElementById('app')).render(<Home/>);

