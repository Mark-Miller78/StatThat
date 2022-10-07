import HomePage from './pages/homepage/homepage';
import Header from './components/Header/Header';


import { StoreProvider } from './context/globalState';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

function App() {

  return (
    <StoreProvider>
      <Router>
        <div className="App">
            <Header />
            <div className='container'>
              <Routes>
                <Route path='/' element={<HomePage />} />
              </Routes>  
            </div>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
