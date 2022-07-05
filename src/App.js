import axios from 'axios';
import {useState, useEffect} from 'react'

import InputField from './components/InputField';
import ResultField from './components/ResultField';

function App() {


  const [countriesList, setCountries] = useState([])
  const [countryQuery, setQuery] = useState('Enter a country name =)')
  const [currentList, setNewList] = useState([])
  const [currentCapital, setCapital] = useState(['dammam'])
  const [weather,setweather]=useState([])




  console.log(currentCapital)

  const showData = (event) =>{
    console.log(event.target.value)
   updateList(event.target.value)
   setCapital(currentList
    .filter(e=>e.name.common.toLowerCase()===event.target.value.toLowerCase())
    .map(e=>e.capital[0]))
}
 
  




  useEffect(()=>{
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response=>
      { 
        console.log(response.data)
        setCountries(response.data)
        setNewList(response.data)
        console.log('the list: ',countriesList.length)
   
        
 
  } )
},[]
)

useEffect(()=>{
  console.log('the current capital',currentCapital)
  axios
  .get(`https://api.openweathermap.org/data/2.5/weather?q=${currentCapital}&APPID=f3908ca4c3440f6bd26b43aa6aa9c716`)
  .then(response=>
    { 
      console.log(response.data)
      setweather(response)
    
  
 
      

} )
},[currentCapital]
)
useEffect(()=>{
  console.log(`use effect`,currentList.length)
  if(currentList.length===1)
  {
    setCapital(currentList.map(e=>e.capital[0]))
  }

},[currentList])


const updateList = (query) =>{
  let newList = countriesList.filter(e=>e.name.common.toLowerCase().includes(`${query}`.toLowerCase()))

 
  console.log(`before newlist `,currentList)
 setNewList(newList)


 
 
  if(currentList.length===1)
{
  
  setCapital(currentList.map(e=>e.capital[0]))
}
}


const queryFieldhandler = (event) =>{

  console.log(event.target.value)
  setQuery(event.target.value)
  updateList(countryQuery)
  if(currentList.length===1)
  {
    
    setCapital(currentList.map(e=>e.capital[0]))
  }
  
  


}

  return (
    <div className='main'>
      <div className='header'>Countries Data app</div>
      <div className='container'>
      <div className='input'>
      <InputField  place={countryQuery} event={queryFieldhandler}/>
      </div>
      <div className='output'>
      <ResultField data={currentList} handler={showData} currentQuery={countryQuery} weather={weather}/>
      </div>
      </div>
      <footer className='footer'><a href="https://github.com/AhmedViC/weatherapp-w-react"><i class="fa-brands fa-github"></i></a></footer>
     

     
    </div>
  );
}

export default App;
