import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { getCountries } from '../redux/slice/countriesSlice';
import bg from './bg.png';
import './styles/countries.css';

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);
  const uniqueKey = uuid();

  useEffect(() => {
    if (!countries || !countries.length) {
      dispatch(getCountries());
    }
  }, [dispatch, countries]);

  return (
    <div className="myApp">
      <div>
        <h1 className="home_heading">HOME</h1>
      </div>
      <div className="header">
        <div className="image_container">
          <img className="bg_header" src={bg} alt="Background" />
        </div>
        <div>
          <h2>Countries Data</h2>
          <p>Over 50 countries</p>
        </div>
      </div>
      <div className="Stats_heading">
        <h4>Stats By Country</h4>
      </div>
      <ul className="countries_container">
        {countries.map((country) => (
          <li key={uniqueKey}>
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
