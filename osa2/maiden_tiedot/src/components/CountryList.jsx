// CountryList

const CountryList = ({ countries, handleShowCountry }) => {
  return (
    <div>
      {countries.map(country => (
        <div key={country.name.common}>
          <p>
            {country.name.common}
            <button onClick={() => handleShowCountry(country)}>show</button>
          </p>
        </div>
      ))}
    </div>
  )
}

export default CountryList
