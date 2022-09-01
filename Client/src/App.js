import HomePage from './pages/homepage/homepage';
import Header from './components/Header/Header';


import { StoreProvider } from './context/globalState';
import './App.css';

function App() {

  return (
    <StoreProvider>
      <div className="App">
          <Header />
          <HomePage />
      </div>
    </StoreProvider>
  );
}

export default App;
