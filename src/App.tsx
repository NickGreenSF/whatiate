import React from 'react';
import styled, { keyframes } from 'styled-components'
import { flipInX, fadeIn } from 'react-animations';
import { Food } from "./constants/Food"
import './App.css'

const flipXAni = keyframes`${flipInX}`
const fadeInAni = keyframes`${fadeIn}`

const width = window.innerWidth;
const height = window.innerHeight;

const TitleBar = styled.div`
  width: ${width}px;
  height: ${height / 10}px;
  top: 0;
  left: 0;
  margin-top: 0;
  position: sticky;
  border: 1px solid black;
  border-bottom: 0px;
  background-color: white;
`

const TopLevel = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

function App() {
  return (
    <TopLevel>
      <TitleBar>text</TitleBar>
      {Object.keys(Food).map((function(key, index){
        let day: string[][] = Food[key];
        return day.map(function(meal, index){
          console.log("element " + meal + " index " + index)
          if (index % 2 == 0){
            return <div>
              {meal[0] + meal[1]}
              <img src={meal[2]} alt="here's a THING of it"></img>
            </div>
          }
          return <div>
            <img src={meal[2]} alt="here's a THING of it"></img>
            {meal[0] + meal[1]}
          </div>
        })
      }))}
    </TopLevel>
  );
}

export default App;
