import Home3 from './pages/Home';
import Question3 from './pages/Question';
import Result3 from './pages/Result';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home3 />} />
      <Route path='/question' element={<Question3 />} />
      <Route path='/result' element={<Result3 />} />
    </Routes>
  );
}

export default App;
