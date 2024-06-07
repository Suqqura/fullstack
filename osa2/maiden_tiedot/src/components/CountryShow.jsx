// CountryShow

// imports
import CountryInfo from './CountryInfo'
import CountryList from './CountryList'


const CountryShow = ({ countries, selectedCountry, handleShowCountry, weather }) => {

  if (countries.length > 10) {
    return <p>Too many Matches, specify another filter</p>
  }

  if (countries.length === 1 || selectedCountry) {
    const country = selectedCountry || countries[0]
    return (
      <div>
        <CountryInfo country={country} weather={weather} />
      </div>
    )
  }

  return (
    <CountryList 
      countries={countries} 
      handleShowCountry={handleShowCountry} 
    />
  )
}

export default CountryShow
