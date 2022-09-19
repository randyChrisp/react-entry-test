import React from 'react';
import { Button, List, ListItem } from '@mui/material';
import './App.css';

function App() {

  let randomNumberObj: number = 0;

  let [numberHeader, setNumberHeader] = React.useState(randomNumberObj);
  const [logList, setLogList] = React.useState([`Random number to ${numberHeader}`]);

  console.log(logList)

  const incrementNumber = 5;

  return (
    <div className="App">
      <h1
        style={{color: numberHeader >= 50 ? 'red' : 'blue'}}
      >
        Number Head Is {numberHeader}
      </h1>

      <Button 
        id='randomButton' 
        variant='outlined' 
        onClick={() => {
          randomNumberObj = Math.floor(Math.random() * 100),            

          setNumberHeader(randomNumberObj);

          const newLogItem = [...logList, `Random number to ${randomNumberObj}`];
          setLogList(newLogItem);          
        }}
        >
          <b>Random Number 
        {numberHeader}</b>
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

          const newIncrementedItem = [...logList, `Incremented number to ${incrementNumberObj}`];
          setLogList(newIncrementedItem);
          }
        }}
      >
        <b>Increment Number 
      {incrementNumber}</b>
      </Button>

      <br></br>
      <br></br>

      <h2>Number Log</h2>
      <List sx={{ '& .MuiListItem-root': {border: 'solid'}}}>
        {logList.map((logItem) => {
          return (
            <ListItem key={logItem}>
              {logItem}
            </ListItem>
          )
        })}
      </List>    

      <div>
        <p> By: Randy Chrisp - 8/20//2022</p>
        <p>	&#169; 2019 World Shipping, Inc.</p>
      </div>
    </div>
  );
}

export default App;
