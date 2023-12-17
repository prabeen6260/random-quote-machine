import logo from './logo.svg';
import './App.css';
import  q from './dataset.js'
import React from 'react';

const box = {
  height: '${quoteToDisplay*15}px',
  width: '300px',
  borderRadius: '2px',
  padding:'30px',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',  // Horizontal centering
  alignItems: 'center',
  fontSize:'23px',
  Font:''      // Vertical centering
};

const body = {
  backgroundColor: 'black',
  height: '100vh',  // Full viewport height
  display: 'flex',
  justifyContent: 'center',  // Horizontal centering for body
  alignItems: 'center',      // Vertical centering for body
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      index: ''
    }
    this.handleClick=this.handleClick.bind(this);
  }
handleClick(){
  this.setState({index: Math.floor(Math.random()*q.quote.length)});
}

  render() {
    let quoteToDisplay=q.quote[this.state.index];
    let authorToDisplay=q.author[this.state.index]
    return (
      <div style={body}>
        <div style={box}>
          {this.state.index === '' && (
            <>
              {q.quote[0]} <br /> -{q.author[0]}
            </>
          )}
          {this.state.index !== '' && (
            <>
              {quoteToDisplay} <br /> -{authorToDisplay}
            </>
          )}
          <button onClick={this.handleClick}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default App;

