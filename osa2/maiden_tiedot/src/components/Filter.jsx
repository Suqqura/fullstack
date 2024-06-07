// Filter

const Filter = ({ searchCountry, handleSearchCountry }) => {
  return (
    <div>
      find countries: <input value={searchCountry} onChange={handleSearchCountry} />
    </div>
  )
}

export default Filter
