import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCountries } from '../redux/slice/countriesSlice';
import bg from './bg.png';
import './styles/countries.css';

const Countries = () => {
  const dispatch = useDispatch();
  const countriesData = useSelector((state) => state.countries.data);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (!countriesData || !countriesData.length) {
      dispatch(getCountries());
    }
  }, [dispatch, countriesData]);

  // Update filteredCountries whenever the countriesData or searchTerm changes
  useEffect(() => {
    const filtered = countriesData.filter((country) => country.name.common
      .toLowerCase()
      .includes(searchTerm.toLowerCase()));
    setFilteredCountries(filtered);
  }, [countriesData, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="myApp">
      <div className="header">
        <div className="image_container">
          <img className="bg_header" src={bg} alt="Background" />
        </div>
        <div>
          <h2>Countries Data</h2>
          <p>Over 50 countries</p>
        </div>
      </div>
      <div>
        <input
          className="search_bar"
          type="text"
          placeholder="Search by country name"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="Stats_heading">
        <h4>Stats By Country</h4>
      </div>
      <ul className="countries_container">
        {filteredCountries.map((country) => (
          <li key={country.name.common}>
            <Link to={`/details/${country.name.common}`} className="country-link">
              <div className="img-container">
                <img src={country.flags.png} alt={`flag of ${country.name[2]}`} className="flag-image" />
              </div>
              <div className="name-container">
                <h3 className="country-name">{country.name.common}</h3>
                <p className="country-area">
                  Area:
                  {country.area}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
