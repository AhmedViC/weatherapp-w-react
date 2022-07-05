import React, { useEffect, useState } from "react";

import axios from 'axios';
const ResultField = (props) => {

  
   
   
    console.log('weather in result field',props.weather)

    console.log(' in result field',props.data)
    if(props.data.length===250||props.currentQuery==='')
    {
        return(
            <div>
               Welcome To This Web site !
               Enter Country name to find its interesing information
            </div>
        )
    }
    if(props.data.length>11)
    {
        return(
            <div>
                Please be more specified 
            </div>
        )
    }
    if(props.data.length===1)
    {   
       
     
       
        return(
            <div>
           
                {props.data.map(e=><div>
                    <h1>{e.name.common}</h1>
            
        
             {console.log(`languages2:`,JSON.stringify(e.languages))}
             
              <img src={e.coatOfArms.png} width="100px" alt="flag"></img>
              <p>area: {e.area}</p>
              <p>Region: {e.region}  km²</p>
             

                
              </div>)
              }
              
            
            <p>capital: {props.weather.data.name}</p>
        
              <p>temperature: {((props.weather.data.main.temp)-272.15).toFixed(2)} celsius</p>
           
             
              <img src={
`http://openweathermap.org/img/w/${props.weather.data.weather[0].icon}.png`} alt={props.weather.data.weather[0].icon}></img>

<p>wind speed: {props.weather.data.wind.speed} m/s</p>
        

          
           
              
            



             
            </div>
        )
    }
    else{
        return(
            <div>
              {props.data
              .map(e=><div><p>{e.name.common}</p><button value={e.name.common} onClick={props.handler}>show</button></div>)}
            </div>
        )

    }


}

export default ResultField