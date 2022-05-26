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

const DateBar = styled.div`
  width: ${width}px;
  height: ${height / 40}px;
  font-size: ${height / 50}px;
  text-align: center;
  position: relative;
`

const FruitLabel = styled.div`
  margin-left: ${width / 10}px;
`

const FruitBar = styled.div`
  width: ${width * .8}px;
  height: ${height / 4}px;
  background-color: white;
  margin-left: ${width / 10}px;
  margin-right: ${width / 10}px;
  font-size: ${width / 40}px;
  text-align: center;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
`

const TopLevel = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
`

const PictureOfFood = styled.img`
  max-height: ${height / 4 - 10}px;
  max-width: ${width / 9}px;
  margin-top: 5px;
  z-index: 2;
  :hover{
    z-index: 3;
    transform: scale(1.1, 1.1);
  }
`

const TopOfTable = styled.div`
  width: ${width / 8}px;
  height: ${height / 20}px;
  margin-left: ${width / 10}px;
  margin-top: ${height / 80}px;
  background-color: brown;
`

const BottomOfTable = styled.div`
  width: ${width / 8}px;
  height: ${height / 20}px;
  margin-left: ${width / 10}px;
  margin-bottom: ${height / 80}px;
  background-color: brown;
`

function App() {
  return (
    <TopLevel>
      <TitleBar>
        <TitleText>
          WHAT I ATE
        </TitleText>
        </TitleBar>
      {Object.keys(Food).map((function(key, index){
        let day: string[][] = Food[key];
        return <div>
          <TopOfTable />
          {day.map(function(meal, index){
            console.log("element " + meal + " index " + index)
            return <div>
              <FruitLabel>{meal[0]}</FruitLabel>
              <FruitBar>
                <PictureOfFood src={meal[2]} alt="here's a THING of it"></PictureOfFood>
                {meal[1]}
              </FruitBar>
            </div>
          })}
          <BottomOfTable />
        </div>
      }))}
    </TopLevel>
  );
}

export default App;
