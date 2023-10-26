import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countries from './component/Countries';
import Details from './component/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
        {/* <Route path="/Details" element={<Details />} /> */}
        <Route path="/details/:name" element={<Details />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
}

export default App;
