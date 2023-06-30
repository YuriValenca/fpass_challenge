import { useState } from 'react';
import { Provider } from 'react-redux';
import '../src/assets/fonts/style.css';
import store from './store';
import SearchHero from './components/SearchHero';
import Header from './components/Header';
import HeroList from './components/HeroList';

function App() {
  const [page, setPage] = useState(1);

  return (
    <Provider store={store}>
      <div className="App">
        {
          page === 1 ? <SearchHero /> : <HeroList />
        }

        <Header
          page={page}
          setPage={setPage}
        />
      </div>
    </Provider>
  );
}

export default App;
