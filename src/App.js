import React from 'react';
import logo from './logo.svg';
import { Button } from '@mui/material';
import './App.css';

function App() {
  let [numberHeader, setNumberHeader] = React.useState({});
  let [logRandomNumber, setLogRandomNumber] = React.useState("");
  let [logIncrementedNumber, setLogIncrementedNumber] = React.useState("");

  const incrementNumber = 5;

  let randomNumberObj = {
    num: 0,
    log: "Started Log at 0"
  };

  let incrementNumberObj = {
    num: randomNumberObj.num + incrementNumber,
    log: `Increment number to ${numberHeader.num}`
  };


  const onRandomButtonClick = () => {
    randomNumberObj = { 
    num: Math.floor(Math.random() * 100),
    log: `Random number to ${numberHeader.num}`    
    }

    setNumberHeader(randomNumberObj);
    setLogRandomNumber(randomNumberObj.log);
    console.log(randomNumberObj.num)
    console.log(logRandomNumber)
  }
  
  const onIncrementButtonClick = () => {
    incrementNumberObj = {
      num: numberHeader.num + incrementNumber,
      log: `Incremented number to ${numberHeader.num}`
    }
  
    if(incrementNumberObj.num > 100) {
      alert("The maximum number is 100.")
    } else {  
    setNumberHeader(incrementNumberObj);
    }
    setLogIncrementedNumber(incrementNumberObj.log);
    console.log(incrementNumberObj.num)
    console.log(incrementNumberObj.log)
  }

  const TextArea = ({value, handleLogChange}) => {
      const onChange = (e) => handleLogChange(e.target.value)
      return (
        <textarea rows={10} cols={100}>
          value={value}
          onChange={(e) => handleLogChange(e.target.value)}
        </textarea>
      );
  };

  return (
    <div className="App">
      <h1>Number Head Is {numberHeader.num}</h1>

      <Button 
        id='randomButton' 
        variant='outlined' 
        onClick={() => {
          randomNumberObj = { 
            num: Math.floor(Math.random() * 100),
            log: `Random number to ${numberHeader.num}`    
          }

          setNumberHeader(randomNumberObj);
          setLogRandomNumber(randomNumberObj.log);
          console.log(randomNumberObj.num)
          console.log(logRandomNumber)
        }}>
          Random Number {numberHeader.num}
        </Button>&nbsp;
      <Button id='incrementButton' variant='outlined' onClick={onIncrementButtonClick}>Increment Number {incrementNumber}</Button>

      <br></br>
      <br></br>
      

      <div>
        <p> By: Randy Chrisp - 8/20//2022</p>
        <p>	&#169; 2019 World Shipping, Inc.</p>
      </div>
    </div>
  );
}

export default App;
