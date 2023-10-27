import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getCountries } from '../redux/slice/countriesSlice'; // Import your action
import './styles/Details.css';

const Details = () => {
  const { name } = useParams(); // Get the 'name' parameter from the URL
  console.log(name);
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.data);

  // Find the country object that matches the name from the URL
  const country = countries.find((country) => country.name.common === name);
  console.log('The selected country', country);

  useEffect(() => {
    if (!country) {
      // Dispatch an action to load details if not already available
      dispatch(getCountries(name)); // Assuming your action expects the country name
    }
  }, [dispatch, name, country]);

  return (
    <div>
      <div className="details_header">
        <Link to="/" className="back-btn">
          &lt;
        </Link>
        <p>countries details</p>
      </div>
      {country && (
        <section>
          <div className="details_img_container">
            <div>
              <img src={country.flags.png} alt={`flag of ${country.name[2]}`} className="flag-image" />
            </div>
            <div className="name-container">
              <h2 className="country-name">{country.name.common}</h2>
              <p className="country-area">
                Area:
                {country.area}
              </p>
            </div>
          </div>
          <div className="country_details_head">
            <p>country details: 2023</p>
          </div>
          <article className="details">
            <div>
              <p>Name</p>
              <p>{country.name.common}</p>
            </div>
            <div>
              <p>Population:</p>
              <p>{country.population}</p>
            </div>
            <div>
              <p>Region:</p>
              <p>{country.region}</p>
            </div>
            <div>
              <p>Subregion:</p>
              <p>{country.subregion}</p>
            </div>
            <div>
              <p>Time Zone:</p>
              <p>{country.timezones}</p>
            </div>
            <div>
              <p>Capital:</p>
              <p>{country.capital}</p>
            </div>
            <div>
              <p>Flag:</p>
              <p>{country.flag}</p>
            </div>
            <div>
              <p>Location on googleMaps:</p>
              <p><a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer">View on Google Maps</a></p>
            </div>
          </article>
        </section>
      )}
    </div>
  );
};

export default Details;
