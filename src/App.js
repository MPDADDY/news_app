import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Countries from './component/Countries';
import Details from './component/Details';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Countries />} />
        <Route path="/details/:name" element={<Details />} />
      </Routes>
    </Router>
  );
}

export default App;
