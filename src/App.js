import './App.css';
import React,{useState,useEffect} from 'react';

const App=()=>{
const [quote,setQuote]=useState('');
const [getAuthor,setAuthor]=useState('');

const [bg, setBg]=useState('#4b2b8f');
const changeColor = () => {
  const getRandomHex = () => {
    return Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
  };

  const randomColor = `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
  setBg(randomColor);
};



const getQuote = async () => {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) {
      throw new Error(`Failed to fetch quote. Status`);
    }
    const data = await response.json();

    setQuote(data.content);
    setAuthor(data.author);
  } catch (error) {
    console.error('Error fetching quote:', error.message);
  }
};

 useEffect(()=>{getQuote()},[]);

 const handleButtonClick = () => {
  getQuote();
  changeColor();
};

  return( 
      <div className='main' style={{backgroundColor:bg}}>
        <div className='box'>
        <div className='quotecss'> {quote}</div>
          <div className='authorcss'>-{getAuthor}</div>
          <button className='buttoncss' onClick={handleButtonClick}>New Quote</button>
        </div>
        </div>
    );
  }


export default App;

