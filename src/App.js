import logo from './logo.svg';
import './App.css';
import  q from './dataset.js'
import React,{useState,useEffect} from 'react';



function App(){
const [index,setIndex]=useState('');
const handleClick=()=>{
  return setIndex(Math.floor(Math.random()*q.quote.length));
}
let quoteToDisplay=q.quote[index];
    let authorToDisplay=q.author[index]
  return(
    
      <div class='main'>
        <div class='box'>
          {index === '' && (
            <>
              {q.quote[0]} <br /> -{q.author[0]}
            </>
          )}
          {index !== '' && (
            <>
              {quoteToDisplay} <br /> -{authorToDisplay}
            </>
          )}
          <button onClick={handleClick}>New Quote</button>
        </div>
      </div>
    );
  }


export default App;

