import { useState } from 'react'
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";
import "./App.css";
import CalcProvider from './Context/CalcContext';

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {

  return (
    <CalcProvider>
      <Wrapper>
        <Screen />
          <ButtonBox>
          {
            btnValues.flat().map((btn, i) => {
              return(
                <Button 
                  key={i}
                  className={btn === "=" ? "equals" : ""}
                  value={btn}
                />
              );
            })
          }
        </ButtonBox>
      </Wrapper>
    </CalcProvider>
  );
}

export default App
