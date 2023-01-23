import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {useState} from 'react'

import reportWebVitals from './reportWebVitals';

const App = (props) => {
  let [contador, setContador] = useState(0)
  
  const handleClick = (operacion) => {
    if (operacion === "sumar") {
      setContador(contador + 1)
    } 
    if(operacion === "restar") {
      setContador(contador - 1)
    }
  }

  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? "Es par" : "Es impar";

  return ( <div>
    <p>EL valor del contador es: </p>
    <h1>{contador}</h1>
    <p>{mensajePar}</p>
    <button onClick={() => handleClick("sumar")}> Sumar </button>
    <button onClick={() => handleClick("restar")}> Restar </button>
  </div>
  
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
