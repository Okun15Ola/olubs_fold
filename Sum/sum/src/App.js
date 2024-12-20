
import Search from './pages/search';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Apps from './pages/home'
import Genre from './pages/Genre';
import Settings from './pages/Settings';
import Radio from './pages/radio';

function App() {
 
  return (
  <Routes>
    <Route path='/' element={<Apps />}/>
    <Route path='/search' element={<Search />}/>
    <Route path='/genre' element={<Genre />}/>
    <Route path='/settings' element={<Settings />}/>
    <Route path='/radio' element={<Radio />}/>
  </Routes>
  );
}

export default App;
