import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../../Api";
const states = [
  "Abia",
  "Adamawa",
  "Akwa Ibom",
  "Anambra",
  "Bauchi",
  "Bayelsa",
  "Benue",
  "Borno",
  "Cross River",
  "Delta",
  "Ebonyi",
  "Edo",
  "Ekiti",
  "Enugu",
  "FCT - Abuja",
  "Gombe",
  "Imo",
  "Jigawa",
  "Kaduna",
  "Kano",
  "Katsina",
  "Kebbi",
  "Kogi",
  "Kwara",
  "Lagos",
  "Nasarawa",
  "Niger",
  "Ogun",
  "Ondo",
  "Osun",
  "Oyo",
  "Plateau",
  "Rivers",
  "Sokoto",
  "Taraba",
  "Yobe",
  "Zamfara"
]
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState('');

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.name} `,
              label: `${city.name}, ${city.countryCode}`,
            };
            // return city.name;
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  const handleSearch = (e)=>{
    let val = e.target.value;
    setSearch(val);
    if(states.find(eState => eState.toLowerCase() === val.toLowerCase()))
    onSearchChange(val);
    else onSearchChange('');
  }

  return (
    // <AsyncPaginate
    //   placeholder="Search for city"
    //   debounceTimeout={600}
    //   value={search}
    //   onChange={handleOnChange}
    //   loadOptions={loadOptions}
    // />
    <>
    <div style={{width:'100%',padding:'20px'}}>
      <input list="search" style={{width:'100%',padding:'10px',fontSize:'16px',outline:'none',border:'1px solid gray',borderRadius:'6px'}} name="search" value={search} onChange={handleSearch} />
      <datalist id='search'>
        {states.map(eState =><option key={eState}>{eState}</option>)}
      </datalist>
    </div>
    </>
  );
};

export default Search;
