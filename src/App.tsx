import React from 'react';
import { 
  Button, 
  List, 
  ListItem, 
  Grid, 
  ToggleButtonGroup, 
  FormControl, 
  FormLabel, 
  ToggleButton, 
  Radio,
  FormControlLabel
} from '@mui/material';
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
  localStorage.setItem("name", "Randy");
  const defaultNumber: NumberObj = {id: 0, number: 0, numberType: "init"};

  const [selectedButton, setSelectedButton] = React.useState<string | null>('');
  const [showHistoryForm, setShowHistoryForm] = React.useState(false);
  console.log(showHistoryForm);
  const [showNumberOrderForm, setShowNumberOrderForm] = React.useState(false);
  console.log(showNumberOrderForm);
  const [showReverseOrderForm, setShowReverseOrderForm] = React.useState(false);
  console.log(showReverseOrderForm);
  const [numberHistory, setNumberHistory] = React.useState<NumberObj[]>([defaultNumber]);

  const numHeader: number = numberHistory.at(-1)?.number || 0;
  const incrementNumber: NumberObj = {id: 0, number: 5, numberType: "incremented"}
  const randomsLength: number = numberHistory.filter(x => x.numberType === "random").length;
  const incrementedsLength: number = numberHistory.filter(x => x.numberType === "incremented").length;

  const incrementIdByOne = () => {
    const arrayOfIds: number[] = numberHistory.map(x => x.id);
    const maxId: number = Math.max(...arrayOfIds);
    const nextId : number = maxId + 1;
    return nextId;
  }

  const handleSelectButton = (
    event: React.MouseEvent<HTMLElement>,
    newSelectedButton: string | null,
    ) => {
      setSelectedButton(newSelectedButton);
  };

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
          
          const newRandomId: number = incrementIdByOne();

          const newHistory: NumberObj[]  = [...numberHistory, {id: newRandomId, number: newRandomNumber, numberType: "random"}];
          setNumberHistory(newHistory);    
          // localStorage.setItem(numberHistory, newHistory);    
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

            const newIncrementedId = incrementIdByOne();
            
            const newIncrementedItem: NumberObj[] = [...numberHistory, {id: newIncrementedId, number: incrementNumberObj, numberType: "incremented"}];
            setNumberHistory(newIncrementedItem);
          }
        }}
      >
        Increment Number - {(incrementNumber.number)}
      </Button>

      <br></br>
      <br></br>

      <FormControl>
        <FormLabel id='formLabel'>Lists</FormLabel>
        <ToggleButtonGroup
          value={selectedButton}
          exclusive
          onChange={handleSelectButton}
          aria-labelledby='formLabel'>
          <ToggleButton value='number-history'
            onClick={() => {
              setShowHistoryForm(!showHistoryForm);
              console.log(showHistoryForm)
              if (showNumberOrderForm) {
                setShowNumberOrderForm(!showNumberOrderForm);
                console.log(showNumberOrderForm)
              }
              if (showReverseOrderForm) {
                setShowReverseOrderForm(!showReverseOrderForm);
                console.log(showReverseOrderForm)
              }
            }}
          >
            Number History
          </ToggleButton>
          <ToggleButton value='numbers-ordered'
            onClick={() => {
              setShowNumberOrderForm(!showNumberOrderForm);
              if(showHistoryForm) {
                setShowHistoryForm(!showHistoryForm);
              }
              if (showReverseOrderForm) {
                setShowReverseOrderForm(!showReverseOrderForm);
              }
           }}
          >
           Ordered Numbers
          </ToggleButton>
          <ToggleButton value='reversed-order'
            onClick={() => {
              setShowReverseOrderForm(!showReverseOrderForm);
              if (showHistoryForm) {
                setShowHistoryForm(!showHistoryForm);
              }
              if (showNumberOrderForm) {
                setShowNumberOrderForm(!showNumberOrderForm);
              }
           }}
          >
            Reversed Numbers
          </ToggleButton>
        </ToggleButtonGroup>
      </FormControl>

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

      <Grid container sx={{ "& .MuiGrid-container": { justifyContent: "center" } }}>
        <Grid item>
        {
          showNumberOrderForm && (
            <List sx={{ "& .MuiList-root": { justifyContent: "center" } }}>
              {numberHistory.filter(x => x.numberType !== "init").map((num) => {
                return(
                <ListItem>
                  {num.id} - {num.number} 
                </ListItem>
                )
              })}
            </List>
          )
        }
        </Grid>
      </Grid>

      <br></br>

      <Grid container sx={{ "& .MuiGrid-container": { justifyContent: "center" } }}>
        <Grid item>
        {
          showReverseOrderForm && (
            <List sx={{ "& .MuiList-root": { justifyContent: "center" } }}>
              {numberHistory.filter(x => x.numberType !== "init").map((num) => {
                return(
                <ListItem>
                  {num.id} - {num.number} 
                </ListItem>
                )
              }).reverse()}
            </List>
          )
        }
        </Grid>
      </Grid>

      <br></br>
      <br></br>

      <div>
        <p> By: Randy Chrisp - 8/20/2022</p>
        <p>	&#169; 2019 World Shipping, Inc.</p>
      </div>
    </div>
  );
}

export default App;
