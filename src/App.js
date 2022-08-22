import React from 'react';
import logo from './logo.svg';
import { Button } from '@mui/material';
import './App.css';

function App() {
  let [numberHeader, setNumberHeader] = React.useState({num: 0, log: "Started Log at 0"});

  let randomNumber = 0;
  let incrementNumber = 5;

  <h1>Number Header Is {numberHeader}</h1>

  const onRandomButtonClick = () => {
    randomNumber = { 
    num: Math.floor(Math.random() * 100),
    log: `Random number to ${numberHeader.num}`    
    }

    setNumberHeader(randomNumber);
    console.log(randomNumber);
    console.log(numberHeader);
  }
  
  const onIncrementButtonClick = () => {
    incrementNumber = {
      num: numberHeader.num + incrementNumber,
      log: `Incremented number to ${numberHeader.num}`
    }
  
    if(incrementNumber > 100)
      alert("The maximum number is 100.");
  
    setNumberHeader(incrementNumber);
    console.log(numberHeader.num)
  }

  return (
    <div className="App">
      <h1>React</h1>

      <Button id='randomButton' variant='outlined' onClick={onRandomButtonClick}>Random Number {numberHeader.num}</Button>&nbsp;
      <Button id='incrementButton' variant='outlined' onClick={onIncrementButtonClick}>Increment Number {incrementNumber}</Button>

      <br></br>
      <br></br>
      
      <textarea rows={10} cols={10}>
        <p>{randomNumber.log}</p>
        <p>{incrementNumber.log}</p>
      </textarea>
      
      <div>
        <p> By: Randy Chrisp - 8/20//2022</p>
        <p>	&#169; 2019 World Shipping, Inc.</p>
      </div>
    </div>
  );
}

export default App;
