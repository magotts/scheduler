import { useState } from "react";

export default function useVisualMode(initial) {
  // const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); // This line is new!

  // When transition is called, we need to add the new mode to our history.

  const transition = function (mode, replace = false) {
    // setMode(mode);
    
    setHistory(prev => {
      if (replace) {
        // When replace is true then set the history to reflect that we are replacing the current mode. 
         return [...prev.slice(0, history.length - 1), mode];
      } else {
        return [...prev, mode];
      }
    })
  }
  // When back is called, we should set the mode to the previous item in our history array.
  // previous item = history.length - 1 in history array
  const back = function () {
   
    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, history.length - 1)]);
      console.log("history", history);
    }

    
  }
  
  //     // We need to put a constraint on our back function. It should not allow the user to go back past the initial mode. This means that our history array will always need to have a length that is greater than or equal to 1. This test will confirm that navigating back from the initial mode will not change the mode value.
  //   if (history.length >= 1) {
  //     setMode(history.length - 1)
  //     setHistory(prev => {
        
  //   })
  //   }
  

  return { mode: history[history.length - 1], transition, back };
}




