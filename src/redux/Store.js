import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './slice/countriesSlice';

const Store = configureStore({
  reducer: {
    countries: countryReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default Store;
