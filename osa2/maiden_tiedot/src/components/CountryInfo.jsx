// CountryInfo

const CountryInfo = ({ country, weather }) => {
  if (!country) return null

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>Capital: {country.capital}</p>
      <p>Area: {country.area}</p>

      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map(language => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <h3>Flag</h3>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />

      {weather ? (
        <div>
          <h3>Weather in {country.capital}</h3>

          <p>Temperature: {weather.main.temp} °C</p>
          <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="weather icon" />
          <p>Wind: {weather.wind.speed} m/s</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  )
}

export default CountryInfo
