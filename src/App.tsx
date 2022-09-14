import React from 'react';
import { Button } from '@mui/material';
import './App.css';

function App() {

  let randomNumberObj: number = 0;

  let [numberHeader, setNumberHeader] = React.useState(randomNumberObj);
  const [logList, setLogList] = React.useState([]);

  const log = {
    random: `Random number to ${numberHeader}`,
    incremented: `Incremented number to ${numberHeader}`
  }

  console.log(numberHeader)

  const incrementNumber = 5;

  return (
    <div className="App">
      <h1>Number Head Is {numberHeader}</h1>

      <Button 
        id='randomButton' 
        variant='outlined' 
        onClick={() => {
          randomNumberObj = Math.floor(Math.random() * 100),            

          setNumberHeader(randomNumberObj);
          
          console.log(log.random)
        }}
        >Random Number {numberHeader}
      </Button>&nbsp;

      <Button 
        id='incrementButton' 
        variant='outlined' 
        onClick={() => {
          let incrementNumberObj = numberHeader + incrementNumber;
        
          if(incrementNumberObj > 100) {
            alert("The maximum number is 100.")
          } else {  
          setNumberHeader(incrementNumberObj);
          console.log(log.incremented)
          }
        }}
      >Increment Number {incrementNumber}
      </Button>

      <br></br>
      <br></br>

      <textarea rows={10} cols={100}>
        Random number to 
      </textarea>      

      <div>
        <p> By: Randy Chrisp - 8/20//2022</p>
        <p>	&#169; 2019 World Shipping, Inc.</p>
      </div>
    </div>
  );
}

export default App;
