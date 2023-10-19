import Home4 from './pages/Home';
import Question4 from './pages/Question';
import Result4 from './pages/Result';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home4 />} />
      <Route path='/question' element={<Question4 />} />
      <Route path='/result' element={<Result4 />} />
    </Routes>
  );
}

export default App;
