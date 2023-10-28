// import React from 'react';
// import Details from '../component/Details';
// import {render as rtlrender, screen} from '@testing-library/react';
// import {Provider} from 'react-redux';
// import Store from '../redux/Store';
// import {MemoryRouter} from 'react-router'; // Use this import


// // const render = component => rtlrender(
// // <Provider store={Store}>
// //   {component}
// // </Provider>
// // )

// const render = (component) =>
//   rtlrender(
//     <Provider store={Store}>
//       <MemoryRouter initialEntries={['/details/Austria']}>
//         {component}
//       </MemoryRouter>
//     </Provider>
//   );


// describe("render", () => {
//   test("renders the details of the clicked element", () => {
//     render(<Details />)
//     expect(screen.getByText("countries details")).toBeInTheDocument()
//   });
// });

import React from 'react';
import {render as rtlrender, screen} from '@testing-library/react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router'; // Correct import
import Store from '../redux/Store';
import Details from '../component/Details';

const render = (component) => rtlrender(
  <Provider store={Store}>
    <MemoryRouter initialEntries={['/details/Austria']}>
      {component}
    </MemoryRouter>
  </Provider>
);

describe("render", () => {
  test("renders the details of the clicked element", () => {
    render(<Details />);
    expect(screen.getByText("Austria")).toBeInTheDocument();
  });
});
