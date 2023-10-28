import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import {Provider} from 'react-redux'; // If you're using Redux
import configureStore from 'redux-mock-store'; // If you're using Redux
import Countries from '../component/Countries'; // Adjust the path as needed

const mockStore = configureStore([]);
const store = mockStore({
  data: {
    countries: [
      {name: {common: 'Country 1'}, flags: {png: 'flag1.png'}, area: 100},
      {name: {common: 'Country 2'}, flags: {png: 'flag2.png'}, area: 200},
      // Add more test data as needed
    ],
  },
});

describe('Countries Component', () => {
  test('renders component with initial data', () => {
    render(
      <Provider store={store}>
        <Countries />
      </Provider>
    );

    // Example: Check if an element with the given text is in the component
    expect(screen.getByText('Countries Data')).toBeInTheDocument();
    expect(screen.getByText('Over 50 countries')).toBeInTheDocument();
    // Add more checks as needed
  });

  test('updates filteredCountries when searching', () => {
    render(
      <Provider store={store}>
        <Countries />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Search by country name');
    fireEvent.change(searchInput, {target: {value: 'Country 1'}});

    // Example: Check if a specific item appears in the list after searching
    expect(screen.getByText('Country 1')).toBeInTheDocument();
    expect(screen.queryByText('Country 2')).not.toBeInTheDocument();
    // Add more checks as needed
  });
});

