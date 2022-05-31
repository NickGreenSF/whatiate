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
  background-color: white;
  text-align: center;
  z-index: 3;
`

const TitleText = styled.div`
  padding-top: ${height / 30}px;
`

const CerealBox = styled.div`
  position: relative;
  width: ${width * .4}px;
  margin-left: ${width * .05}px;
  height: ${height * .4}px;
  overflow: hidden;
  @media screen and (max-width: 1200px){
    width: ${width * .9}px;
  }
`

const PictureOfFood = styled.img`
  position: absolute;
  min-width: 100%;
  min-height: 100%;
  z-index: -1;
`

const TextBacker = styled.div`
  background-color: black;
  color: white;
  margin-top: ${height * .3}px;
  width: 33%;
  margin-left: 10%;
  font-size: 20px;
`

const Text = styled.div`
  margin: 5px;
`

const Day = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 1200px){
    grid-template-columns: 1fr;
  }
`

function App() {
  return (
    <div>
      <TitleBar>
        <TitleText>
          WHAT I ATE
        </TitleText>
        </TitleBar>
      {Object.keys(Food).map((function(key, index){
        let day: string[][] = Food[key];
        return <div>{key}<Day>
          {day.map(function(meal, index){
            console.log("element " + meal + " index " + index)
            return <CerealBox>
              <PictureOfFood src={meal[2]} alt="here's a THING of it"></PictureOfFood>
              <TextBacker>
                <Text>{meal[1]}</Text>
              </TextBacker>
            </CerealBox>
          })}
        </Day>
        </div>
      }))}
    </div>
  );
}

export default App;
