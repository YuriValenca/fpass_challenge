import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import '../src/assets/fonts/style.css';

function App() {
  const [page, setPage] = useState(1);

  return (
    <div className="App">

      <Header
        page={page}
        setPage={setPage}
      />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
