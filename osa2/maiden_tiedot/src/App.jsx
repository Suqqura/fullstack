// maiden tiedot, 2.18 - 2.20 done

// imports
import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import CountryShow from './components/CountryShow'
import countriesService from './services/countries'
import weatherService from './services/weather'
import './index.css'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchCountry, setSearchCountry] = useState('')
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [weather, setWeather] = useState(null)
  const [loadingWeather, setLoadingWeather] = useState(false)
  const [error, setError] = useState(null)

  // fetch all countries
  useEffect(() => {
    countriesService.getAll()
      .then(initialCountries => {
        setCountries(initialCountries)
      })
      .catch(error => {
        console.error('Error fetching countries:', error)
        setError('Error fetching countries data')
      })
  }, [])

  // Fetch weather data when its needed
  useEffect(() => {
    if (selectedCountry && selectedCountry.capital) {
      setLoadingWeather(true)
      weatherService.getWeather(selectedCountry.capital)
        .then(weatherData => {
          setWeather(weatherData)
          setLoadingWeather(false)
        })
        .catch(error => {
          console.error('Error fetching weather data:', error)
          setLoadingWeather(false)
          setError('Error fetching weather data')
        })
    }
  }, [selectedCountry])

  // handle filter input
  const handleSearchCountry = (event) => {
    console.log("filter with", event.target.value)
    setSearchCountry(event.target.value)
    setSelectedCountry(null)
    setWeather(null)
  }

  // handle "show" button click
  const handleShowCountry = (country) => {
    console.log("selected country", country)
    setSelectedCountry(country)
    setSearchCountry('')
  }

  // Filter countries or...
  const filteredCountries = searchCountry
    ? countries.filter(country =>
      country.name.common.toLowerCase().includes(searchCountry.toLowerCase()))
    : []

  // ...1 country
  useEffect(() => {
    if (filteredCountries.length === 1) {
      setSelectedCountry(filteredCountries[0])
    }
  }, [filteredCountries])


  return (
    <div className='container'>
      <h2>Country Search</h2>
      {error && <p className="error">{error}</p>}

      <Filter searchCountry={searchCountry} handleSearchCountry={handleSearchCountry} />

      <CountryShow
        countries={filteredCountries}
        selectedCountry={selectedCountry}
        weather={weather}
        handleShowCountry={handleShowCountry}
      />
    </div>
  )
}


export default App
