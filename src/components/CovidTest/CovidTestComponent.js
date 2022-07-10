import React from 'react'
import Wrapper from './Wrapper'
import Covid from "../image/covid.png"
const CovidTestComponent = () => {
  return (
    <div> <div className="imageContainer">
    <img
      src={Covid}
     
      alt="covid-19"
    ></img>
    <h1>
      <center>Covid-19 India Tracker ❄️</center>
    </h1>
  </div>
  < Wrapper/></div>
  )
}

export default CovidTestComponent