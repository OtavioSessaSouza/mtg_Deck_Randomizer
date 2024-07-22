import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar  from './components/SearchBar';
import Body from './components/body';
import NotFound from './components/Notfund';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Body/>}/>
            <Route path='*' element={<NotFound/>}/>
            
          </Routes>         
        </div>
      </div>
    </Router>
    
  );
}

export default App;