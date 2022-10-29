import HomePage from './pages/homepage/homepage';
import Header from './components/Header/Header';
import TeamPage from './pages/teampage/teampage';


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
                <Route path='/teams/:teamName/:teamId' element={<TeamPage />} />
              </Routes>  
            </div>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
