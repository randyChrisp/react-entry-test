import React from 'react';
import { Button, List, ListItem, Grid,  } from '@mui/material';
import './App.css';

const randomNumberBetween0And100 = () => {
 return Math.floor(Math.random() * 100);
}

interface NumberObj {
  id: number,
  number: number,
  numberType: "init" | "random" | "incremented"
}

function App() {
  
  let nextId: number = 0;
  const defaultNumber: NumberObj = {id: nextId, number: 0, numberType: "init"};

  const [showHistoryForm, setShowHistoryForm] = React.useState(false);
  const [numberHistory, setNumberHistory] = React.useState<NumberObj[]>([defaultNumber]);

  const numHeader: number = numberHistory.at(-1)?.number || 0;
  const incrementNumber: NumberObj = {id: nextId, number: 5, numberType: "incremented"}
  const randomsLength: number = numberHistory.filter(x => x.numberType === "random").length;
  const incrementedsLength: number = numberHistory.filter(x => x.numberType === "incremented").length;

  return (
    <div className="App">
      <h1
        style={{color: numHeader >= 50 ? 'red' : 'blue'}}
      >
        Number Head Is {numHeader}
      </h1>

      <Button 
        id='randomButton' 
        variant='outlined' 
        onClick={() => {

          const newRandomNumber: number = randomNumberBetween0And100();
          
          for (const randomNumber of numberHistory) {
            if (randomNumber.id > nextId) nextId = randomNumber.id;
          }
          nextId = nextId + 1;

          const newHistory: NumberObj[]  = [...numberHistory, {id: nextId, number: newRandomNumber, numberType: "random"}];
          setNumberHistory(newHistory);           
        }}
        >
          Random Number - {numHeader}
      </Button>&nbsp;

      <Button 
        id='incrementButton' 
        variant='outlined' 
        onClick={() => {

          const incrementNumberObj: number = numHeader + incrementNumber.number;
        
          if(incrementNumberObj > 100) {
            alert("The maximum number is 100.")
          } else {

            for (const incrementedNumberId of numberHistory) {
              if (incrementedNumberId.id > nextId) nextId = incrementedNumberId.id;
            }
            nextId = nextId + 1;

            const newIncrementedItem: NumberObj[] = [...numberHistory, {id: nextId, number: incrementNumberObj, numberType: "incremented"}];
            setNumberHistory(newIncrementedItem);
          }
        }}
      >
        Increment Number - {(incrementNumber.number)}
      </Button>

      <br></br>
      <br></br>

      <Button
        id='NumberObj'
        variant='contained'
        onClick={() => {
         setShowHistoryForm(!showHistoryForm)
        }} 
      >
        Number History
      </Button>

      <br></br>
      <br></br>

      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>        
        <Grid item>
          {
            showHistoryForm && (
              <List sx={{ "& .MuiListItem-root": { justifyContent: "center" } }}>
                <span>Random Numbers (Clicks {randomsLength})</span>
                {numberHistory.filter(x => x.numberType === "random").map((historyItem) => {
                  return(
                  <ListItem>
                    {historyItem.id} - {historyItem.number} 
                  </ListItem>
                  )
                })}
              </List>
            )
          }
        </Grid>
        <Grid item>
          {
            showHistoryForm && (
               <List sx={{ "& .MuiListItem-root": { justifyContent: "center"}}}>
                <span>Incremented Numbers (Clicks {incrementedsLength})</span>
                {numberHistory.filter(x => x.numberType === "incremented").map((historyItem) => {
                  return(
                  <ListItem>
                    {historyItem.id} - {historyItem.number} 
                  </ListItem>
                  )
                })}
              </List>
            )
          }
        </Grid>
      </Grid>

      <div>
        <p> By: Randy Chrisp - 8/20/2022</p>
        <p>	&#169; 2019 World Shipping, Inc.</p>
      </div>
    </div>
  );
}

export default App;
