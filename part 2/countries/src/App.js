import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Country = ({country}) => {
  const [show, setShow] = useState(false)
  const [weather, setWeather] = useState("")

  const expandShow = () => {
    setShow(!show)
    //replace with api call for weather and render accordingly
    setWeather("Sunny")
  }

  return (
    <div>
      {country.name.official}
      <button onClick={expandShow}>show</button>
        {show ? 
        <React.Fragment>
          <h1>{country.name.official}</h1>
          <p>Capital:&nbsp;{country.capital[0]}</p>
          <p>Population:&nbsp;{country.population}</p>
          <h2>Spoken Languages</h2>
          <ul>
            {Object.values(country.languages).map((language, idx)=>(
              <li key={idx}>{language}</li>
            ))}
          </ul>
          <img src={country.flags.png}></img>
          <p>{weather}</p>
        </React.Fragment>
         : null}
    </div>
  )
}

function App() {
  const [countries, setCountries] = useState([]);
  const [searched, setSearched] = useState("");

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then(response => {
      setCountries(response.data);
      console.log(response.data)
    })
  }, [])

  const handleSearchChange = (event) => {
    setSearched(event.target.value)
  }

  return (
    <React.Fragment>
        find countries:   
        <input 
          value = {searched}
          onChange = {handleSearchChange}
        />
      <div>
      {searched.length > 0 ?
        countries.filter((country)=>
          country.name.official.toLowerCase().includes(searched.toLowerCase())
        ).length <= 10 ? countries.filter((country)=>
          country.name.official.toLowerCase().includes(searched.toLowerCase())
        )
         .map((country, idx) => (
           <Country key={idx} country={country}/>
          )
        ) : "Too many matches, specify another filter"
      : null }
      </div>
    </React.Fragment>
  );
}

export default App;
